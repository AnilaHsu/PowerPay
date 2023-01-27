import styles from "./Partners.module.scss";
import Image from "next/image";
import partnerLogo1 from "/public/partnerLogo1.png";
import partnerLogo2 from "/public/partnerLogo2.png";
import partnerLogo3 from "/public/partnerLogo3.png";
import partnerLogo4 from "/public/partnerLogo4.png";
import partnerLogo5 from "/public/partnerLogo5.png";
import partnerLogo6 from "/public/partnerLogo6.png";
import { motion } from "framer-motion";
import {
  floatContainer,
  floatElement,
  scrollVariants,
  scrollElement,
  appearContainer,
  appearElement,
} from "@/animation";

const Partners = () => {
  return (
    <motion.section
      className={styles.partnersSection}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.h1 className={styles.tagline} variants={scrollElement}>
        あの
        <motion.span
          className={styles.highline}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {"実力派サロン".split("").map((char, index) => {
            return (
              <motion.span key={index} variants={floatElement}>
                {char}
              </motion.span>
            );
          })}
        </motion.span>
        が続々導入&#65281;
      </motion.h1>
      <motion.p
        className={styles.about}
        variants={appearContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {"Powerpayを導入する美容サロン・エステがどんどん増えています。"
          .split("")
          .map((char, index) => {
            return (
              <motion.span key={index} variants={appearElement}>
                {char}
              </motion.span>
            );
          })}
      </motion.p>
      <motion.div className={styles.partners} variants={scrollVariants}>
        <Image
          className={styles.partnerLogo}
          src={partnerLogo1}
          alt="Beauty salons introduce Powerpay include Reep salon."
        />
        <Image
          className={styles.partnerLogo}
          src={partnerLogo2}
          alt="Beauty salons introduce Powerpay include Suger Suger salon"
        />
        <Image
          className={styles.partnerLogo}
          src={partnerLogo3}
          alt="Beauty salons introduce Powerpay include Giande Swing salon"
        />
        <Image
          className={styles.partnerLogo}
          src={partnerLogo4}
          alt="Beauty salons introduce Powerpay include Ooolong salon"
        />
        <Image
          className={styles.partnerLogo}
          src={partnerLogo5}
          alt="Beauty salons introduce Powerpay include Kazkaz salon"
        />
        <Image
          className={styles.partnerLogo}
          src={partnerLogo6}
          alt="Beauty salons introduce Powerpay include Eieivn salon"
        />
      </motion.div>
    </motion.section>
  );
};

export default Partners;
