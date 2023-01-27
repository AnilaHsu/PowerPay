import styles from "./Toolbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import linkIcon from "/public/linkIcon.svg";
import { motion } from "framer-motion";

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Link href="">
        <h2 className={styles.brandName}>
          <Image className={styles.logo} src={logo} alt="Power Pay" />
          Power Pay
        </h2>
      </Link>
      <motion.button
        className={styles.introButton}
        whileHover={{ scale: 0.98 }}
        transition={{ ease: [0.165, 0.84, 0.44, 1] }}
      >
        <Image src={linkIcon} alt="" />
        サービス紹介ページを見る
      </motion.button>
    </div>
  );
};

export default Toolbar;
