import { Variants } from "framer-motion";

export const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 80,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
      delayChildren: 0.3,
    },
  },
};

export const scrollElement: Variants = {
  offscreen: { opacity: 0, y: 80 },
  onscreen: { opacity: 1, y: 0 },
};

export const floatContainer: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.06,
      delayChildren: 0.3,
      ease: [0.39, 0.575, 0.565, 1],
      duration: 0.8,
    },
  },
};

export const floatElement: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export const appearContainer: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.01,
      delayChildren: 0.3,
      ease: [0.39, 0.575, 0.565, 1],
      duration: 0.8,
    },
  },
};

export const appearElement: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
