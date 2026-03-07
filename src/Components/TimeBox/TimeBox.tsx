import { useRef, useState, useEffect } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./TimeBoxStyle.css";

const Counter = ({ end, label }: { end: number; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.9 });

  const count = useMotionValue(0);
  // إعدادات spring أبطأ وأنعم
  const spring = useSpring(count, { stiffness: 30, damping: 15 });
  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      count.set(end); // يبدأ العد لما 90% من العنصر يظهر
    }
  }, [inView, end, count]);

  return (
    <div ref={ref} className="time-box">
      <span className="minutes">{displayValue}MIN</span>
      <p className="time-paragragh">{label}</p>
    </div>
  );
};

const TimeBox = () => {
  return (
    <div className="TimeBox-container">
      <Counter end={5} label="Al Rusayl Industrial Area" />
      <Counter end={10} label="Al Mawaleh - City Center" />
      <Counter end={15} label="Oman International Exhibition" />
      <Counter end={20} label="Muscat International Airport" />
    </div>
  );
};

export default TimeBox;
