import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="">
        <h2 className={styles.brandName}>
          <Image className={styles.logo} src={logo} alt="Power Pay" />
          Power Pay
        </h2>
      </Link>
      <div className={styles.otherInfo}>
        <Link href="" className={styles.infoLink}>
          サービス紹介ページ
        </Link>
        <Link href="" className={styles.infoLink}>
          会社情報
        </Link>
        <Link href="" className={styles.infoLink}>
          プライバシーポリシー
        </Link>
        <Link href="" className={styles.infoLink}>
          利用規約
        </Link>
      </div>
      <span className={styles.copyright}>
        Copyright © Power Change Inc. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
