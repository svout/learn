import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768): boolean {
  // Default to mobile on SSR to prevent desktop flash on real mobile devices.
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const apply = () => setIsMobile(mediaQuery.matches);

    // Set immediately on mount, then subscribe to changes
    apply();
    mediaQuery.addEventListener("change", apply);
    return () => mediaQuery.removeEventListener("change", apply);
  }, [breakpoint]);

  return isMobile;
}
