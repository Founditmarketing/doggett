import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import type { Plugin } from 'vite';

function resendDevProxy(): Plugin {
  let resendApiKey = '';
  return {
    name: 'resend-dev-proxy',
    configResolved() {
      const env = loadEnv('development', '.', '');
      resendApiKey = env.RESEND_API_KEY || '';
    },
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        for await (const chunk of req) {
          body += chunk;
        }

        try {
          const { name, email, phone, preferredContact, inquiryType, details } = JSON.parse(body);

          const htmlBody = `
            <h2>New Consultation Inquiry</h2>
            <hr/>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            <hr/>
            <h3>Details</h3>
            <p>${details}</p>
          `;

          const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Doggett Law <hello@doggettlaw.net>',
              to: 'kenneth@doggettlaw.net',
              reply_to: email,
              subject: `New ${inquiryType} Inquiry from ${name}`,
              html: htmlBody,
            }),
          });

          const data = await response.json();
          res.setHeader('Content-Type', 'application/json');

          if (!response.ok) {
            console.error('Resend API error:', data);
            res.statusCode = response.status;
            res.end(JSON.stringify({ error: 'Failed to send email', details: data }));
            return;
          }

          res.statusCode = 200;
          res.end(JSON.stringify({ success: true, id: data.id }));
        } catch (error) {
          console.error('Send email error:', error);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), resendDevProxy()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
