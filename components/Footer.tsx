"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import styles from "../styles/footer.module.css";

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <>
            <div className={styles.footerWrapper}>
                <footer className={styles.footer}>

                    {/* Company Block */}
                    <div className={styles.companyBlock}>
                        <p className={styles.companyNameChinese}>{"连云港华印矿投国际贸易有限公司"}</p>
                        <p className={styles.companyNameEn}>Lianyungang Huayin Mining Investment International Trading Co., Ltd.</p>
                        <p className={styles.companyTagline}>
                            {"Bridging global mineral resources with China's markets — from Lianyungang to the world."}
                        </p>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>Services</p>
                        <Link href="/services#mining" className={styles.footerLink}>Mining Investment</Link>
                        <Link href="/services#trade" className={styles.footerLink}>International Trade</Link>
                        <Link href="/services#logistics" className={styles.footerLink}>{"Logistics & Shipping"}</Link>
                        <Link href="/services#finance" className={styles.footerLink}>Trade Finance</Link>
                        <Link href="/services#advisory" className={styles.footerLink}>Advisory</Link>
                    </div>

                    {/* Products */}
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>Products</p>
                        <Link href="/services#iron" className={styles.footerLink}>Iron Ore</Link>
                        <Link href="/services#coal" className={styles.footerLink}>Coal</Link>
                        <Link href="/services#copper" className={styles.footerLink}>Copper</Link>
                        <Link href="/services#manganese" className={styles.footerLink}>Manganese</Link>
                        <Link href="/services#cobalt" className={styles.footerLink}>{"Cobalt & Zinc"}</Link>
                    </div>

                    {/* Company + HQ */}
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>Company</p>
                        <Link href="/about" className={styles.footerLink}>About Us</Link>
                        <Link href="/about#advantages" className={styles.footerLink}>Advantages</Link>
                        <Link href="/contact" className={styles.footerLink}>Contact</Link>

                        <div className={styles.hqBox}>
                            <p className={styles.hqTitle}>Headquarters</p>
                            <p className={styles.hqLine}>No. 68 East Hailian Road</p>
                            <p className={styles.hqLine}>{"Lianyungang · 222001"}</p>
                            <p className={styles.hqLine}>Jiangsu, China</p>
                        </div>
                    </div>

                </footer>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomInner}>
                    <p className={styles.copy}>
                        © {year} All Rights Reserved HIMI
                    </p>

                    <p className={styles.credit}>
                        Designed and developed by{" "}
                        <a
                            href="https://hosthive.online/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.creditLink}
                        >
                            Host.Hive
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}