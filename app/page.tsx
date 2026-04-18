"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import styles from "../styles/page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const INDIA_TO_CHINA = [
    {
      name: "Mining & Minerals",
      subtitle: "Iron Ore · Coal · Bauxite",
      specs: "Fe 58–68% · Grade A",
      icon: "⛏️",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=75",
    },
    {
      name: "Rice",
      subtitle: "Basmati · Non-Basmati",
      specs: "Premium Export Quality",
      icon: "🌾",
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=75",
    },
    {
      name: "Aavalu Seeds",
      subtitle: "Mustard Seeds · Yellow & Black",
      specs: "Bold Grade · Oil Seed",
      icon: "🫘",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=75",
    },
    {
      name: "Masalas & Spices",
      subtitle: "Turmeric · Chilli · Cumin",
      specs: "Certified · Export Grade",
      icon: "🌶️",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75",
    },
    {
      name: "Raded Seeds",
      subtitle: "Sesame · Sunflower · Linseed",
      specs: "Oil Seed Grade · Sorted",
      icon: "🌱",
      img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&q=75",
    },
    {
      name: "Sea Food (River)",
      subtitle: "Prawns · Fish · Crab",
      specs: "Fresh · Frozen · Certified",
      icon: "🦐",
      img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=75",
    },
  ];

  const CHINA_TO_INDIA = [
    {
      name: "Pharma Raw Material",
      subtitle: "API · Excipients · Intermediates",
      specs: "GMP Certified · USP Grade",
      icon: "💊",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=75",
    },
    {
      name: "Electrical Cables",
      subtitle: "Power · Control · Instrumentation",
      specs: "LT · HT · Armoured",
      icon: "🔌",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    },
    {
      name: "Generators",
      subtitle: "Diesel · Gas · Silent · Solar",
      specs: "5 kVA – 2000 kVA",
      icon: "⚡",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75",
    },
    {
      name: "Water & Submersible Motors",
      subtitle: "Heavy Duty · Domestic · Agricultural",
      specs: "0.5 HP – 100 HP",
      icon: "🔧",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75",
    },
    {
      name: "Furniture",
      subtitle: "Commercial & Home Needs",
      specs: "Wood · Metal · Modular",
      icon: "🪑",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
    },
    {
      name: "Vehicle Spare Parts",
      subtitle: "Motor Vehicles · All Types",
      specs: "OEM · Aftermarket",
      icon: "🚗",
      img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=75",
    },
    {
      name: "Vehicle Batteries",
      subtitle: "All Types · All Vehicles",
      specs: "12V – 48V · Lead & Li-ion",
      icon: "🔋",
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=75",
    },
    {
      name: "Cranes & Forklifts",
      subtitle: "Diesel · Battery · All Capacities",
      specs: "1T – 50T · CE Certified",
      icon: "🏗️",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    },
    {
      name: "Electrical Goods",
      subtitle: "Home & Commercial",
      specs: "Switches · Panels · Fittings",
      icon: "💡",
      img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=75",
    },
    {
      name: "Solar Panels & Lights",
      subtitle: "Solar · Diesel Generator Combo",
      specs: "100W – 500kW Systems",
      icon: "☀️",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75",
    },
    {
      name: "Soundless Generators",
      subtitle: "Silent Canopy · Indoor Safe",
      specs: "3 kVA – 500 kVA",
      icon: "🔇",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75",
    },
    {
      name: "Electrical Transformers",
      subtitle: "Oil Type · Dry Type · Plates",
      specs: "11kV – 132kV · ISI Marked",
      icon: "⚙️",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=75",
    },
  ];

  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBg}>
            {/* Desktop image */}
            <Image
              src="/images/hero.jpeg"
              alt=""
              fill
              className={`${styles.heroBgImg} ${styles.heroDesktop}`}
              priority
            />
            {/* Mobile image */}
            <Image
              src="/images/hero-mobile.png"
              alt=""
              fill
              className={`${styles.heroBgImg} ${styles.heroMobile}`}
              priority
            />
            <div className={styles.heroMask} />
          </div>
          <div className={styles.heroMask} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroBody}>
            <p className={styles.eyebrow}>Est. Lianyungang, China</p>
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroSub}>{t.hero.subtitle}</p>
            <div className={styles.heroCtas}>
              <a href="#services" className={styles.btnPrimary}>{t.hero.primaryCta}</a>
              <a href="#contact" className={styles.btnGhost}>{t.hero.secondaryCta}</a>
            </div>
          </div>
        </div>
        <div className={styles.scrollLine} />
      </section>

      {/* ── STATS ── */}
      <div className={styles.statsBar} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {t.home.stats.map((s) => (
              <div key={s.label} className={`${styles.statItem} ${visible ? styles.statIn : ""}`}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.splitImg}>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
                alt="Mining operations"
              />
            </div>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>{t.about.heading}</p>
              <h2 className={styles.h2}>{t.about.coreBusiness}</h2>
              <p className={styles.lead}>{t.about.philosophyTitle}</p>
              <p className={styles.body}>{t.about.paragraph}</p>
              <div className={styles.twoCol}>
                <div className={styles.listBox}>
                  <p className={styles.listTitle}>{t.about.importsTitle}</p>
                  <ul className={styles.dotList}>
                    {t.about.imports.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
                <div className={styles.listBox}>
                  <p className={styles.listTitle}>{t.about.exportsTitle}</p>
                  <ul className={styles.dotList}>
                    {t.about.exports.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>{t.services.heading}</p>
            <h2 className={styles.h2}>{t.services.intro}</h2>
          </div>
          <div className={styles.servGrid}>
            {t.services.cards.map((card, i) => (
              <article key={card.title} className={styles.servCard}>
                <div className={styles.servImg}>
                  <img src={SERVICE_IMGS[i % SERVICE_IMGS.length]} alt={card.title} />
                </div>
                <div className={styles.servBody}>
                  <span className={styles.servNum}>0{i + 1}</span>
                  <h3 className={styles.servTitle}>{card.title}</h3>
                  <p className={styles.servDesc}>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...MINERALS, ...MINERALS].map((m, i) => (
            <span key={i} className={styles.marqueeItem}>{m}</span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      {/* <section id="minerals" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>{t.home.products.heading}</p>
            <h2 className={styles.h2}>{t.home.products.title}</h2>
          </div>
          <div className={styles.prodGrid}>
            {t.home.products.items.map((item, i) => (
              <article
                key={item.name}
                className={styles.prodCard}
                style={{ backgroundImage: `url(${PROD_IMGS[i % PROD_IMGS.length]})` }}
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
      </section> */}

      
      {/* ── TRADE SECTIONS ── */}
      <section id="minerals" className={styles.section}>
        <div className={styles.container}>

          {/* India → China */}
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>India → China</p>
            <h2 className={styles.h2}>{t.trade?.indiaToChina?.title ?? "India to China Imports"}</h2>
          </div>
          <div className={styles.prodGrid}>
            {INDIA_TO_CHINA.slice(0, 5).map((item) => (
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
          <div className={styles.viewAllWrap}>
            <Link href="/imports" className={styles.viewAllBtn}>
              {t.trade?.viewAll ?? "View All"} →
            </Link>
          </div>

          <div className={styles.tradeDivider} />

          {/* China → India */}
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>China → India</p>
            <h2 className={styles.h2}>{t.trade?.chinaToIndia?.title ?? "China to India Imports"}</h2>
          </div>
          <div className={styles.prodGrid}>
            {CHINA_TO_INDIA.slice(0, 5).map((item) => (
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
          <div className={styles.viewAllWrap}>
            <Link href="/services" className={styles.viewAllBtn}>
              {t.trade?.viewAll ?? "View All"} →
            </Link>
          </div>

        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="why" className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>{t.home.advantages.heading}</p>
            <h2 className={styles.h2}>{t.home.advantages.title}</h2>
          </div>
          <div className={styles.advGrid}>
            {t.home.advantages.items.map((item) => (
              <article key={item.title} className={styles.advCard}>
                <span className={styles.advNum}>{item.number}</span>
                <h3 className={styles.advTitle}>{item.title}</h3>
                <p className={styles.advDesc}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow}>Insights</p>
            <h2 className={styles.h2}>Industry Updates & News</h2>
          </div>
          <div className={styles.insightGrid}>
            {INSIGHTS.map((item) => (
              <article key={item.title} className={styles.insightCard}>
                <div className={styles.insightImg}>
                  <img src={item.img} alt={item.title} />
                  <span className={styles.insightTag}>{item.tag}</span>
                </div>
                <div className={styles.insightBody}>
                  <p className={styles.insightDate}>{item.date}</p>
                  <h3 className={styles.insightTitle}>{item.title}</h3>
                  <p className={styles.insightExcerpt}>{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.secHead}>
            <p className={styles.eyebrow} style={{ color: "#c9a84c" }}>{t.contact.heading}</p>
            <h2 className={styles.h2} style={{ color: "white" }}>{t.contact.intro}</h2>
          </div>
          <div className={styles.contactGrid}>
            <aside className={styles.contactInfo}>
              <div className={styles.contactBlock}>
                <p className={styles.contactLabel}>{t.contact.addressTitle}</p>
                <p className={styles.contactText}>{t.contact.address}</p>
              </div>
              <div className={styles.contactBlock}>
                <p className={styles.contactLabel}>{t.nav.contact}</p>
                <p className={styles.contactText}>{t.contact.phone}</p>
                <p className={styles.contactText}>{t.contact.email}</p>
              </div>
              <div className={styles.contactBlock}>
                <p className={styles.contactLabel}>Hours</p>
                <p className={styles.contactText}>Mon – Fri, 9:00 – 18:00 CST</p>
              </div>
            </aside>
            <div className={styles.contactFormCard}>
              <h3 className={styles.formTitle}>{t.contact.heading}</h3>
              <p className={styles.formSub}>{t.contact.messageSent}</p>
              <div className={styles.formGrid}>
                <div className={styles.formField}>
                  <label>{t.contact.formName}</label>
                  <input type="text" placeholder={t.contact.formName} />
                </div>
                <div className={styles.formField}>
                  <label>{t.contact.formEmail}</label>
                  <input type="email" placeholder={t.contact.formEmail} />
                </div>
                <div className={`${styles.formField} ${styles.formFull}`}>
                  <label>{t.contact.formMessage}</label>
                  <textarea rows={5} placeholder={t.contact.formMessage} />
                </div>
                <div className={styles.formFull}>
                  <button className={styles.btnPrimary}>{t.contact.formSubmit}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Static data ── */
const SERVICE_IMGS = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=75",
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=75",
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=75",
  "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&q=75",
];

const PROD_IMGS = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=75",
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=75",
  "https://images.unsplash.com/photo-1511174511562-5f97f4d29f83?w=600&q=75",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=75",
];

const MINERALS = ["Iron Ore", "Coal", "Copper", "Manganese", "Cobalt & Zinc", "Limestone", "Bauxite"];

const INSIGHTS = [
  {
    title: "Global Iron Ore Demand Rises in 2025",
    excerpt: "Demand from Southeast Asian steelmakers continues to drive record volumes through Lianyungang port.",
    tag: "Market", date: "April 2025",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=75",
  },
  {
    title: "India–China Trade Corridor Expansion",
    excerpt: "New bilateral agreements open fresh opportunities for mineral commodity flows between the two nations.",
    tag: "Trade", date: "March 2025",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=75",
  },
  {
    title: "Copper Supply Tightens Ahead of EV Boom",
    excerpt: "Battery and EV manufacturers are accelerating procurement, creating a structural deficit in copper supply.",
    tag: "Commodities", date: "February 2025",
    img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=75",
  },
];