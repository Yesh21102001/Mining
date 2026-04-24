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
  { name: "Mining & Minerals", subtitle: "Iron Ore · Coal · Bauxite", specs: "Fe 58–68% · Grade A", icon: "⛏️", img: "/images/iron.jpeg" },
  { name: "Rice", subtitle: "Basmati · Non-Basmati", specs: "Premium Export Quality", icon: "🌾", img: "/images/rice.jpeg" },
  { name: "Aavalu Seeds", subtitle: "Mustard Seeds · Yellow & Black", specs: "Bold Grade · Oil Seed", icon: "🫘", img: "/images/aavalu.jpeg" },
  { name: "Masalas & Spices", subtitle: "Turmeric · Chilli · Cumin", specs: "Certified · Export Grade", icon: "🌶️", img: "/images/masala.jpeg" },
  { name: "Raded Seeds", subtitle: "Sesame · Sunflower · Linseed", specs: "Oil Seed Grade · Sorted", icon: "🌱", img: "/images/raded.jpeg" },
  { name: "Sea Food (River)", subtitle: "Prawns · Fish · Crab", specs: "Fresh · Frozen · Certified", icon: "🦐", img: "/images/fish.jpeg" },
];

const CHINA_TO_INDIA = [
  { name: "Pharma Raw Material", subtitle: "API · Excipients · Intermediates", specs: "GMP Certified · USP Grade", icon: "💊", img: "/images/pharma.jpeg" },
  { name: "Electrical Cables", subtitle: "Power · Control · Instrumentation", specs: "LT · HT · Armoured", icon: "🔌", img: "/images/electrical.jpeg" },
  { name: "Generators", subtitle: "Diesel · Gas · Silent · Solar", specs: "5 kVA – 2000 kVA", icon: "⚡", img: "/images/generators.jpeg" },
  { name: "Water & Submersible Motors", subtitle: "Heavy Duty · Domestic · Agricultural", specs: "0.5 HP – 100 HP", icon: "🔧", img: "/images/water.jpeg" },
  { name: "Furniture", subtitle: "Commercial & Home Needs", specs: "Wood · Metal · Modular", icon: "🪑", img: "/images/furniture.jpeg" },
  { name: "Vehicle Spare Parts", subtitle: "Motor Vehicles · All Types", specs: "OEM · Aftermarket", icon: "🚗", img: "/images/vechile.jpeg" },
  { name: "Vehicle Batteries", subtitle: "All Types · All Vehicles", specs: "12V – 48V · Lead & Li-ion", icon: "🔋", img: "/images/vechile-batteries.jpeg" },
  { name: "Cranes & Forklifts", subtitle: "Diesel · Battery · All Capacities", specs: "1T – 50T · CE Certified", icon: "🏗️", img: "/images/cranes.jpeg" },
  { name: "Electrical Goods", subtitle: "Home & Commercial", specs: "Switches · Panels · Fittings", icon: "💡", img: "/images/electrical goods.jpeg" },
  { name: "Solar Panels & Lights", subtitle: "Solar · Diesel Generator Combo", specs: "100W – 500kW Systems", icon: "☀️", img: "/images/solar.jpeg" },
  { name: "Soundless Generators", subtitle: "Silent Canopy · Indoor Safe", specs: "3 kVA – 500 kVA", icon: "🔇", img: "/images/soundless.jpeg" },
  { name: "Electrical Transformers", subtitle: "Oil Type · Dry Type · Plates", specs: "11kV – 132kV · ISI Marked", icon: "⚙️", img: "/images/electrical-transformers.jpeg" },
];