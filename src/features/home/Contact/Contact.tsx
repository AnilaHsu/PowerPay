import styles from "./Contact.module.scss";
import { TextField } from "@/components/TextField";
import { motion } from "framer-motion";
import {
  appearContainer,
  appearElement,
  floatContainer,
  floatElement,
  scrollElement,
  scrollVariants,
} from "@/animation";

const Contact = () => {
  return (
    <motion.section
      className={styles.contactSection}
      variants={scrollVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div className={styles.contactInfo} variants={scrollElement}>
        <motion.h5
          className={styles.subtitle}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {"わかりやすい資料".split("").map((char, index) => {
            return (
              <motion.span key={index} variants={floatElement}>
                {char}
              </motion.span>
            );
          })}
        </motion.h5>
        {["いますぐ資料を", "ダウンロード"].map((item, index) => {
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
      </motion.div>
      <motion.form className={styles.contactForm} variants={scrollElement}>
        <TextField id="name" type="text" text="お名前" />
        <TextField id="mail" type="email" text="メールアドレス" />
        <TextField id="orgName" type="text" text="企業・団体名" />
        <TextField id="phone" type="tel" text="電話番号" />
        <motion.p
          className={styles.buttonNote}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {"\\無料でPDF資料をお送りします/".split("").map((char, index) => {
            return (
              <motion.span key={index} variants={floatElement}>
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <motion.button
          className={styles.formButton}
          whileHover={{ scale: 0.98 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1] }}
          variants={floatContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          無料ダウンロード
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
