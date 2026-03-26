import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (hash) {
            // Wait slightly for any new page to render if navigating across routes
            setTimeout(() => {
                if (lenis) {
                    lenis.scrollTo(hash, { offset: -100, immediate: false });
                } else {
                    const el = document.querySelector(hash);
                    if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }
            }, 100);
        } else {
            // Scroll to top instantly
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, [pathname, hash, lenis]);

    return null;
}
