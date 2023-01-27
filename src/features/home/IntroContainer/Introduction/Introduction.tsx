import Image, { StaticImageData } from "next/image";
import styles from "./Introduction.module.scss";
import { motion } from "framer-motion";
import {
  floatContainer,
  floatElement,
  scrollVariants,
  appearContainer,
  appearElement,
} from "@/animation";

interface IntroductionProps {
  image: StaticImageData;
  imageAlt: string;
  subtitle: string;
  title: string[];
  description: string;
  buttonContent: string;
  reverse: boolean;
}

const Introduction = (props: IntroductionProps) => {
  return (
    <motion.div
      className={`${styles.introduction} ${
        props.reverse ? styles.rowReverse : styles.row
      }`}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div variants={appearElement}>
        <Image
          className={styles.introductionImage}
          src={props.image}
          alt="feature1"
        />
      </motion.div>
      <div className={styles.introductionInfo}>
        <motion.h5
          className={styles.subtitle}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {props.subtitle.split("").map((char, index) => {
            return (
              <motion.span key={index} variants={floatElement}>
                {char}
              </motion.span>
            );
          })}
        </motion.h5>
        {props.title.map((item, index) => {
          return (
            <motion.h1
              key={index}
              className={styles.title}
              variants={appearContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {item.split("").map((char, index) => {
                return (
                  <motion.span key={index} variants={appearElement}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
          );
        })}
        <motion.p
          className={styles.description}
          variants={appearContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {props.description.split("").map((char, index) => {
            return (
              <motion.span key={index} variants={appearElement}>
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <motion.button
          className={styles.downloadButton}
          whileHover={{ scale: 0.98 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1] }}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {props.buttonContent}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Introduction;
