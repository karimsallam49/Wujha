import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import "./FooterStyle.css"
import { FooterExperssInterest } from '../FooterExperssInterest/FooterExperssInterest';
import { FormComponent } from '../FormComponent/FormComponent';

export const FooterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
       <div className="FooterContainer" style={{ position: "relative" }}>

      <motion.div
        className="footersection"
        initial={{ scale: 1 }}
        animate={{ scale: inView ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 6, ease: 'easeInOut' }}
      />

      <div ref={ref} className="footerText MainTextSize" style={{ position:"absolute",zIndex:"100" }}>

        <motion.div
  initial={{ opacity: 0, y: 1000 }}  
  animate={inView ? { opacity: 1, y: 100 } : { opacity: 0, y: 1000 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h6
          className='MainTextSize'
            style={{ fontSize: '1.7rem', margin: 0 ,marginLeft:"4rem" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Start Your Journey with <span className='MainColor MainTextSize m-1' >
             WUJHA 
            </span>
             Today
          </motion.h6>

          <motion.p
            style={{ fontSize: '1.3rem', marginTop: '0.5rem' ,marginLeft:"4rem" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='subtextMain'
          >
            <b>Whether you are looking for your dream home, a strategic investment, or a new home for your business, our team is here to guide you.</b>
          </motion.p>
        </motion.div>
      </div>

      <motion.div
      className='FooterExperssInterest'
        style={{ width: "60%", height: "100%" }}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0} : { opacity: 0, x: -100 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <FooterExperssInterest />
      </motion.div>

      <motion.div
      className='FooterForm'
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0, x: 1000 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 1000 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <FormComponent />
      </motion.div>
    </div>
  );
}
