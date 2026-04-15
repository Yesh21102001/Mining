"use client";

import styles from "../../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroLine} />
        <div className={styles.heroNum}>Est. 1986 · Shanghai</div>

        <div className={styles.heroContent}>
          <div className={`${styles.heroTag} ${styles.fd1}`}>About the company</div>
          <h1 className={`${styles.heroH1} ${styles.fd2}`}>
            Bridging <em>China</em><br />to the World
          </h1>
          <p className={`${styles.heroSub} ${styles.fd3}`}>
            One of China's largest and most trusted trading conglomerates — connecting
            global markets with precision, integrity, and four decades of expertise.
          </p>
          <div className={`${styles.heroStats} ${styles.fd4}`}>
            {[
              { val: "¥84B+", lbl: "Annual Revenue" },
              { val: "62+",   lbl: "Countries" },
              { val: "38k",   lbl: "Employees" },
              { val: "1986",  lbl: "Founded" },
            ].map((s) => (
              <div key={s.lbl} className={styles.statItem}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLbl}>{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SPLIT ── */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImgWrap}>
            <div className={styles.aboutImgFrame}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                alt="Company headquarters"
              />
            </div>
            <div className={styles.aboutBadge}>
              <small>Fortune</small>
              Top 50
              <small>China</small>
            </div>
          </div>

          <div className={styles.aboutText}>
            <div>
              <div className={styles.label}>Our Story</div>
              <h2 className={styles.h2}>
                Four decades of <em>trust</em>,<br />built one trade at a time.
              </h2>
            </div>
            <p className={styles.bodyText}>
              Founded in 1986 in Shanghai, we have grown from a regional trading house
              into one of China's most respected multinational enterprises. Our integrated
              supply chain and deep global network allow us to move goods, capital, and
              expertise with unmatched efficiency.
            </p>
            <p className={styles.bodyText}>
              We operate across energy, commodities, industrial equipment, consumer goods,
              and financial services — always guided by a singular commitment: long-term
              value over short-term gains.
            </p>
            <div>
              <p className={styles.pillsLabel}>Core values</p>
              <div className={styles.pills}>
                {["Integrity","Innovation","Precision","Sustainability","Partnership","Excellence"].map((v) => (
                  <span key={v} className={styles.pill}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRADE GRID ── */}
      <section className={styles.tradeSection}>
        <div className={styles.tradeHeader}>
          <div>
            <div className={`${styles.label} ${styles.labelGold}`}>What We Trade</div>
            <h2 className={`${styles.h2} ${styles.h2White}`}>
              Global flows, <em>local</em> expertise.
            </h2>
          </div>
          <p className={`${styles.bodyText} ${styles.bodyMuted}`}>
            Our trading operations span six continents. We source, finance, transport,
            and distribute commodities and manufactured goods at a scale few can match.
          </p>
        </div>

        <div className={styles.tradeGrid}>
          {[
            {
              icon: "⚡",
              title: "Energy & Resources",
              items: ["Crude oil & LNG","Coal & metallurgical coke","Refined petroleum products","Renewable energy equipment"],
            },
            {
              icon: "🏭",
              title: "Industrial Goods",
              items: ["Steel, aluminum & alloys","Heavy machinery & equipment","Chemical raw materials","Construction materials"],
            },
            {
              icon: "🌾",
              title: "Agriculture & Food",
              items: ["Grains, oilseeds & pulses","Frozen seafood & proteins","Fresh produce & tropical goods","Food processing technology"],
            },
            {
              icon: "📦",
              title: "Consumer & Tech",
              items: ["Electronics & semiconductors","Textiles & apparel","Consumer appliances","Pharmaceuticals & medical"],
            },
          ].map((card) => (
            <div key={card.title} className={styles.tradeCard}>
              <div className={styles.tradeIcon}>{card.icon}</div>
              <div className={styles.tradeTitle}>{card.title}</div>
              <ul className={styles.tradeList}>
                {card.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philSection}>
        <div className={styles.label}>Our Philosophy</div>
        <h2 className={styles.h2}>The principles that <em>guide</em> us.</h2>

        <div className={styles.philGrid}>
          {[
            { n:"01", title:"Long-Term Thinking",    desc:"We build relationships, not just transactions. Every partnership is designed to create sustainable value that compounds over decades." },
            { n:"02", title:"Radical Transparency",  desc:"In a complex world, clarity is our competitive advantage. We operate with full visibility across our supply chains and financial flows." },
            { n:"03", title:"Relentless Innovation", desc:"We invest heavily in logistics technology, data intelligence, and green trade infrastructure to stay ahead of global market shifts." },
            { n:"04", title:"People First",          desc:"Our 38,000 employees are our greatest asset. We cultivate talent, foster diversity, and invest in communities wherever we operate." },
            { n:"05", title:"Global Citizenship",    desc:"Trade should lift all boats. We actively pursue ESG initiatives, carbon reduction targets, and equitable sourcing across all markets." },
            { n:"06", title:"Precision Execution",   desc:"At the scale we operate, details are everything. Flawless logistics, risk management, and compliance are non-negotiable standards." },
          ].map((c) => (
            <div key={c.n} className={styles.philCard}>
              <span className={styles.philNum}>{c.n}</span>
              <div className={styles.philTitle}>{c.title}</div>
              <p className={styles.philDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineGrid}>
          <div>
            <div className={`${styles.label} ${styles.labelGold}`}>Our Journey</div>
            <h2 className={`${styles.h2} ${styles.h2White}`}>
              Four decades of <em>milestones</em>.
            </h2>
            <p className={`${styles.bodyText} ${styles.bodyMuted}`} style={{ marginTop: "16px" }}>
              From a small Shanghai trading office to a global enterprise spanning every
              major market on earth.
            </p>
          </div>

          <div className={styles.timeline}>
            {[
              { year:"1986", title:"Founded in Shanghai",             desc:"Established as a state-supported trading entity with a mandate to expand China's international trade footprint." },
              { year:"1994", title:"First International Office",      desc:"Opened our Hong Kong and Singapore operations, establishing our first offshore trading hubs." },
              { year:"2003", title:"Listed on Shanghai Stock Exchange",desc:"Completed our IPO, raising ¥6.2B and cementing our position as one of China's premier trading companies." },
              { year:"2012", title:"Fortune Global 500 Entry",        desc:"Achieved landmark recognition as one of the world's 500 largest companies by revenue." },
              { year:"2024", title:"¥84B Revenue Milestone",          desc:"Record revenues driven by energy, industrial goods, and emerging market expansion across Southeast Asia and Africa." },
            ].map((item) => (
              <div key={item.year} className={styles.tlItem}>
                <div className={styles.tlDot} />
                <span className={styles.tlYear}>{item.year}</span>
                <div className={styles.tlTitle}>{item.title}</div>
                <p className={styles.tlDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaText}>
          <h2 className={styles.h2}>Ready to trade <em>at scale?</em></h2>
          <p>Let's build a partnership that creates lasting value.</p>
        </div>
        <div className={styles.ctaBtns}>
          <button className={styles.btnPrimary}>Get in touch →</button>
          <button className={styles.btnOutline}>Download Brochure</button>
        </div>
      </div>

    </div>
  );
}