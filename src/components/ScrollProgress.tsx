import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary z-[60]"
    />
  );
}
