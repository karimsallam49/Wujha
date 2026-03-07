import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number; 
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="position-relative mb-5 ps-4"
      style={{ minHeight: "120px" }}
    >
      <div
        className="position-absolute top-0 bottom-0 end-0"
        style={{ width: "3px", backgroundColor: "gray" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay, 
        }}
        style={{ width: "90%" }}
      >
        <h4
          style={{
            color: "gray",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {question}
        </h4>
        <p style={{ color: "black", fontSize: "1.2rem" }}>{answer}</p>
      </motion.div>
    </div>
  );
};

const WujhaFAQLines: React.FC = () => {
  const faqs = [
    {
      question: "Who is Wujha Development?",
      answer:
        "A leading real estate development company in Oman, combining modern design with Omani heritage.",
    },
    {
      question: "Where is Wujha headquartered?",
      answer: "Muscat, Oman.",
    },
    {
      question: "What projects does Wujha focus on?",
      answer:
        "Residential apartments, integrated communities, commercial spaces, and investment-friendly developments.",
    },
    {
      question: "Are properties open to expatriates?",
      answer:
        "Yes, selected projects are open for ownership by non-Omani residents.",
    },
    {
      question: "Does Wujha provide financing?",
      answer:
        "Yes, through partnerships with leading banks in Oman for mortgages and easy payment plans.",
    },
    {
      question: "Does Wujha offer after-sales services?",
      answer:
        "Yes, including property management, maintenance, and customer support.",
    },
    {
      question: "What is Wujha’s vision?",
      answer:
        "To contribute to Oman’s Vision 2040 with sustainable, modern, and community-focused developments.",
    },
  ];

  return (
    <div className="min-vh-100">
     

      <div className="container py-5">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            delay={i * 0.2} 
          />
        ))}
      </div>
    </div>
  );
};

export default WujhaFAQLines;
