"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import styles from "../styles/navbar.module.css";
import Image from "next/image";

type NavKey = "home" | "about" | "services" | "staff" | "contact";

const navLinks: Array<{ href: string; key: NavKey }> = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/services", key: "services" },
    { href: "/staff", key: "staff" },
    { href: "/contact", key: "contact" },
];

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const pathname = usePathname();
    const nextLanguage = language === "en" ? "zh" : "en";

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo only — drop your <img> here */}
                <Link href="/" className={styles.brand}>
                    <Image
                        src="/images/logo.png"
                        alt="Lianyungang Huayin Mining Investment"
                        width={200}
                        height={70}
                        className={styles.logoImg}
                    />
                </Link>

                {/* Desktop nav */}
                <nav className={styles.navList}>
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            (link.href !== "/" && pathname?.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                            >
                                {t.nav[link.key]}
                            </Link>
                        );
                    })}
                </nav>

                {/* Actions */}
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.langButton}
                        onClick={() => setLanguage(nextLanguage)}
                    >
                        {language === "en" ? "中文" : "English"}
                    </button>
                    {/* CTA hidden on mobile — bottom nav handles nav */}
                    <Link href="/contact" className={styles.ctaButton}>
                        {t.nav.contact}
                    </Link>
                </div>
            </div>
        </header>
    );
}