"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type NavKey = "home" | "about" | "services" | "staff" | "contact";

const navLinks: Array<{ href: string; key: NavKey }> = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/services", key: "services" },
    { href: "/staff", key: "staff" },
    { href: "/contact", key: "contact" },
];

const languages = [
    { code: "en", label: "English", },
    { code: "zh", label: "中文", },
];

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find((l) => l.code === language) || languages[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Logo */}
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

                    {/* ✅ Language Dropdown */}
                    <div className={styles.langDropdown} ref={dropdownRef}>

                        {/* Trigger button */}
                        <button
                            type="button"
                            className={styles.langButton}
                            onClick={() => setDropdownOpen((prev) => !prev)}
                        >
                            <span>{currentLang.flag}</span>
                            <span>{currentLang.label}</span>
                            <svg
                                className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ""}`}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 4L6 8L10 4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* ✅ Dropdown menu — only renders when open */}
                        {dropdownOpen && (
                            <ul className={styles.langMenu}>
                                {languages.map((lang) => (
                                    <li key={lang.code}>
                                        <button
                                            type="button"
                                            className={`${styles.langOption} ${
                                                language === lang.code ? styles.langOptionActive : ""
                                            }`}
                                            onClick={() => {
                                                setLanguage(lang.code as "en" | "zh");
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.label}</span>
                                            {language === lang.code && (
                                                <svg
                                                    style={{ marginLeft: "auto" }}
                                                    width="13"
                                                    height="13"
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2 6.5L5 9.5L11 3"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className={styles.ctaButton}>
                        {t.nav.contact}
                    </Link>
                </div>
            </div>
        </header>
    );
}