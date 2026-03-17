import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        // If lenis is active (desktop), we command it to scroll to top instantly
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            // Fallback for native scrolling (mobile)
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
}
