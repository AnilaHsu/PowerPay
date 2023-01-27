import { easeInOut, Variants } from "framer-motion";

export const bannerVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      type: "tween",
      duration: 1,
      ease: easeInOut,
    },
  },
};

export const bannerElement: Variants = {
  offscreen: { opacity: 0, x: -5 },
  onscreen: { opacity: 1, x: 0 },
};
