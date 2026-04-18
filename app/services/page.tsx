"use client";

import Link from "next/link";
import { useLanguage } from "../../components/LanguageContext";
import styles from "../../styles/page.module.css";

export default function ImportsPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>

      {/* ── PAGE HEADER ── */}
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Trade & Commerce</p>
          <h1 className={styles.pageHeroTitle}>
            {t.trade?.pageTitle ?? "Import & Export Products"}
          </h1>
          <p className={styles.pageHeroSub}>
            {t.trade?.pageSubtitle ?? "Bridging India and China with reliable trade across minerals, agriculture, machinery and industrial goods."}
          </p>
        </div>
      </section>

      {/* ── INDIA → CHINA ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>India → China</p>
            <h2 className={styles.h2}>
              {t.trade?.indiaToChina?.title ?? "India to China Imports"}
            </h2>
          </div>
          <div className={styles.prodGrid}>
            {INDIA_TO_CHINA.map((item) => (
              <article
                key={item.name}
                className={styles.prodCard}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className={styles.prodOverlay} />
                <div className={styles.prodContent}>
                  <span className={styles.prodIcon}>{item.icon}</span>
                  <h3 className={styles.prodName}>{item.name}</h3>
                  <p className={styles.prodSub}>{item.subtitle}</p>
                  <p className={styles.prodSpec}>{item.specs}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.tradeDivider} />
      </div>

      {/* ── CHINA → INDIA ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>China → India</p>
            <h2 className={styles.h2}>
              {t.trade?.chinaToIndia?.title ?? "China to India Imports"}
            </h2>
          </div>
          <div className={styles.prodGrid}>
            {CHINA_TO_INDIA.map((item) => (
              <article
                key={item.name}
                className={styles.prodCard}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className={styles.prodOverlay} />
                <div className={styles.prodContent}>
                  <span className={styles.prodIcon}>{item.icon}</span>
                  <h3 className={styles.prodName}>{item.name}</h3>
                  <p className={styles.prodSub}>{item.subtitle}</p>
                  <p className={styles.prodSpec}>{item.specs}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div className={styles.container} style={{ paddingBottom: "60px", textAlign: "center" }}>
        <Link href="/#minerals" className={styles.viewAllBtn}>
          ← {t.trade?.backHome ?? "Back to Home"}
        </Link>
      </div>

    </main>
  );
}

/* ── Static data (same as homepage) ── */
const INDIA_TO_CHINA = [
  { name: "Mining & Minerals", subtitle: "Iron Ore · Coal · Bauxite", specs: "Fe 58–68% · Grade A", icon: "⛏️", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=75" },
  { name: "Rice", subtitle: "Basmati · Non-Basmati", specs: "Premium Export Quality", icon: "🌾", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=75" },
  { name: "Aavalu Seeds", subtitle: "Mustard Seeds · Yellow & Black", specs: "Bold Grade · Oil Seed", icon: "🫘", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=75" },
  { name: "Masalas & Spices", subtitle: "Turmeric · Chilli · Cumin", specs: "Certified · Export Grade", icon: "🌶️", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75" },
  { name: "Raded Seeds", subtitle: "Sesame · Sunflower · Linseed", specs: "Oil Seed Grade · Sorted", icon: "🌱", img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&q=75" },
  { name: "Sea Food (River)", subtitle: "Prawns · Fish · Crab", specs: "Fresh · Frozen · Certified", icon: "🦐", img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=75" },
];

const CHINA_TO_INDIA = [
  { name: "Pharma Raw Material", subtitle: "API · Excipients · Intermediates", specs: "GMP Certified · USP Grade", icon: "💊", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=75" },
  { name: "Electrical Cables", subtitle: "Power · Control · Instrumentation", specs: "LT · HT · Armoured", icon: "🔌", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75" },
  { name: "Generators", subtitle: "Diesel · Gas · Silent · Solar", specs: "5 kVA – 2000 kVA", icon: "⚡", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75" },
  { name: "Water & Submersible Motors", subtitle: "Heavy Duty · Domestic · Agricultural", specs: "0.5 HP – 100 HP", icon: "🔧", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75" },
  { name: "Furniture", subtitle: "Commercial & Home Needs", specs: "Wood · Metal · Modular", icon: "🪑", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75" },
  { name: "Vehicle Spare Parts", subtitle: "Motor Vehicles · All Types", specs: "OEM · Aftermarket", icon: "🚗", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=75" },
  { name: "Vehicle Batteries", subtitle: "All Types · All Vehicles", specs: "12V – 48V · Lead & Li-ion", icon: "🔋", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=75" },
  { name: "Cranes & Forklifts", subtitle: "Diesel · Battery · All Capacities", specs: "1T – 50T · CE Certified", icon: "🏗️", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75" },
  { name: "Electrical Goods", subtitle: "Home & Commercial", specs: "Switches · Panels · Fittings", icon: "💡", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=75" },
  { name: "Solar Panels & Lights", subtitle: "Solar · Diesel Generator Combo", specs: "100W – 500kW Systems", icon: "☀️", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75" },
  { name: "Soundless Generators", subtitle: "Silent Canopy · Indoor Safe", specs: "3 kVA – 500 kVA", icon: "🔇", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75" },
  { name: "Electrical Transformers", subtitle: "Oil Type · Dry Type · Plates", specs: "11kV – 132kV · ISI Marked", icon: "⚙️", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=75" },
];