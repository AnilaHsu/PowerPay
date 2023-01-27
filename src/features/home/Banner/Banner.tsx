import styles from "./Banner.module.scss";
import Image from "next/image";
import banner from "/public/banner.png";
import { motion } from "framer-motion";
import { bannerElement, bannerVariants } from "./animation";
import {
  appearContainer,
  appearElement,
  floatContainer,
  floatElement,
} from "@/animation";

const Banner = () => {
  return (
    <motion.section
      className={styles.bannerSection}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={bannerVariants}
    >
      <motion.div className={styles.bannerInfo} variants={bannerElement}>
        <h1 className={styles.tagline}>
          ビューティー
          <motion.span
            className={styles.highline}
            variants={floatContainer}
            initial="hidden"
            animate="show"
          >
            {"業界で話題".split("").map((char, index) => {
              return (
                <motion.span key={index} variants={floatElement}>
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
          &#65281;
        </h1>
        <h1 className={styles.tagline}>あの人気美容サロンも導入</h1>
        <h1 className={styles.tagline}>
          <motion.span
            className={styles.highline}
            variants={floatContainer}
            initial="hidden"
            animate="show"
          >
            {"Powerpayの実力".split("").map((char, index) => {
              return (
                <motion.span key={index} variants={floatElement}>
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
          とは
        </h1>
        <motion.p
          className={styles.about}
          variants={appearContainer}
          initial="hidden"
          animate="show"
        >
          {"はじめてPowerpayを知った方に向けて、Powerpayの機能や活用事例、お客さまの声をわかりやすくご紹介しています。"
            .split("")
            .map((char, index) => {
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
          animate="show"
        >
          いますぐ資料をダウンロード
        </motion.button>
      </motion.div>
      <motion.div variants={bannerElement}>
        <Image
          className={styles.bannerImage}
          src={banner}
          alt="Hairdresser brushing and drying guest&#39;s hair in the salon"
        />
      </motion.div>
    </motion.section>
  );
};

export default Banner;
