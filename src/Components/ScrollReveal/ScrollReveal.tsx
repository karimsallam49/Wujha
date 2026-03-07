import React, { useEffect, useRef, useMemo, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  className?: string;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const triggers: ScrollTrigger[] = [];

    if (scrollContainerRef?.current && scroller !== window) {
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) {
            (scroller as HTMLElement).scrollTop = value as number;
          }
          return (scroller as HTMLElement).scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: (scroller as HTMLElement).clientWidth,
            height: (scroller as HTMLElement).clientHeight,
          };
        },
        pinType: (scroller as HTMLElement).style.transform ? "transform" : "fixed",
      });
    }

    // rotation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
          onEnter: (self) => triggers.push(self),
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // opacity
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        duration: 1.5, // ⬅️ خليها أطول
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
          onEnter: (self) => triggers.push(self),
        },
      }
    );

    // blur
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
            onEnter: (self) => triggers.push(self),
          },
        }
      );
    }

    ScrollTrigger.addEventListener("refresh", () => ScrollTrigger.update());
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
      if (scrollContainerRef?.current) {
        ScrollTrigger.scrollerProxy(scroller, null as any); // cleanup proxy
      }
      ScrollTrigger.removeEventListener("refresh", () => ScrollTrigger.update());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div className="scroll-reveal-container">

    <p ref={containerRef} className={`scroll-reveal ${containerClassName} ${className}`}>
      <span className={`scroll-reveal-text ${textClassName}`}>{splitText}</span>
    </p>
    </div>
  );
};

export default ScrollReveal;
