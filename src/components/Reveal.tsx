import { motion } from 'motion/react';

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

export const Reveal = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
