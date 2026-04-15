"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/bottomNav.module.css";

const tabs = [
    {
        href: "/",
        label: "Home",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
    },
    {
        href: "/about",
        label: "About",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
    {
        href: "/staff",
        label: "Staff",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        href: "/contact",
        label: "Contact us",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.6 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.93-8.22A2 2 0 0 1 4.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    const activeIndex = tabs.findIndex(
        (tab) =>
            pathname === tab.href ||
            (tab.href !== "/" && pathname?.startsWith(tab.href))
    );

    return (
        <nav className={styles.bottomNav} aria-label="Mobile navigation">
            {tabs.map((tab, i) => {
                const isActive = i === activeIndex;
                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <span className={styles.iconWrap}>{tab.icon}</span>
                        <span className={styles.label}>{tab.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}