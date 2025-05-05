import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use a timeout to ensure scroll happens after navigation completes
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" }); // use "auto" or "instant" to avoid delay
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
