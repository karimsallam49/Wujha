import { createContext, useContext, useEffect } from "react";
import { motionValue, MotionValue } from "framer-motion";

type ScrollContextType = {
  scrollY: MotionValue<number>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({
  containerRef,
  children,
}: {
  containerRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}) => {
  const scrollY = motionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      scrollY.set(el.scrollTop);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [containerRef]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContainer = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScrollContainer must be used inside ScrollProvider");
  return ctx;
};
