export default function Footer() {
  return (
    <footer className="bg-obsidian pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border border-champagne flex items-center justify-center">
                <span className="font-serif text-champagne text-xl leading-none">D</span>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase text-alabaster">
                Doggett <span className="text-champagne">Law</span>
              </span>
            </div>
            <p className="text-alabaster/50 text-sm font-light max-w-sm leading-relaxed">
              World-class legal representation rooted in Alexandria, Louisiana. Protecting legacies, families, and futures with absolute resolve.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-champagne mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-alabaster/70 font-light">
              <li>1100 Martin Luther King Drive Suite A<br/>Alexandria, LA 71301</li>
              <li>(318) 888-3644</li>
              <li>kenneth@doggettlaw.net</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-champagne mb-6">Practice Areas</h4>
            <ul className="space-y-4 text-sm text-alabaster/70 font-light">
              <li><a href="#expertise" className="hover:text-champagne transition-colors">Personal Injury</a></li>
              <li><a href="#expertise" className="hover:text-champagne transition-colors">Family Law</a></li>
              <li><a href="#expertise" className="hover:text-champagne transition-colors">Succession Law</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-alabaster/40 font-light">
          <p>&copy; {new Date().getFullYear()} Doggett Law. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-alabaster transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-alabaster transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-alabaster transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
