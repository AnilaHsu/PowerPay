import styles from "./IntroContainer.module.scss";
import feature1 from "/public/feature1.png";
import feature2 from "/public/feature2.png";
import feature3 from "/public/feature3.png";
import { Introduction } from "@/features/home/IntroContainer/Introduction";

const IntroContainer = () => {
  return (
    <section className={styles.introSection}>
      <Introduction
        image={feature1}
        imageAlt="smart mobile phone floating above a person's hand"
        subtitle="ブランディング"
        title={["あなたのサロンの世界観を", "お客様のスマホに"]}
        description="はじめてPowerpayを知った方に向けて、Powerpayの機能や活用事例、お客さまの声をわかりやすくご紹介しています。"
        buttonContent="いますぐ資料をダウンロード"
        reverse={false}
      />
      <Introduction
        image={feature2}
        imageAlt="A woman is lying in a spa with a facial mask applied to her face"
        subtitle="リピーター・ファン作り"
        title={["来店回数149%アップ", "リピーターを増やそう"]}
        description="はじめてPowerpayを知った方に向けて、Powerpayの機能や活用事例、お客さまの声をわかりやすくご紹介しています。"
        buttonContent="いますぐ資料をダウンロード"
        reverse={true}
      />
      <Introduction
        image={feature3}
        imageAlt="A person is scanning a QR code barcode pasted on a table with a mobile phone"
        subtitle="QRコード決済"
        title={["QRコード決済に求められるすべてがここに"]}
        description="はじめてPowerpayを知った方に向けて、Powerpayの機能や活用事例、お客さまの声をわかりやすくご紹介しています。"
        buttonContent="いますぐ資料をダウンロード"
        reverse={false}
      />
    </section>
  );
};

export default IntroContainer;
