"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
        // Compass — direction, discovery, purpose
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
        ),
    },
    {
        href: "/staff",
        label: "Staff",
        // ID Badge — team / people
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="13" y2="14" />
                <circle cx="12" cy="6" r="1.5" />
            </svg>
        ),
    },
    {
        href: "/contact",
        label: "Contact",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.6 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.93-8.22A2 2 0 0 1 4.61 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
];

export default function BottomNav() {
    const pathname = usePathname();
    const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [bubbleLeft, setBubbleLeft] = useState<number | null>(null);
    const [ready, setReady] = useState(false);

    const activeIndex = tabs.findIndex(
        (tab) =>
            pathname === tab.href ||
            (tab.href !== "/" && pathname?.startsWith(tab.href))
    );

    useEffect(() => {
        const el = tabRefs.current[activeIndex];
        if (!el) return;
        const nav = el.closest("nav");
        if (!nav) return;
        const navRect = nav.getBoundingClientRect();
        const tabRect = el.getBoundingClientRect();
        const left = tabRect.left - navRect.left + (tabRect.width - 46) / 2;
        setBubbleLeft(left);
        setReady(true);
    }, [activeIndex]);

    return (
        <nav className={styles.bottomNav} aria-label="Mobile navigation">
            {ready && bubbleLeft !== null && (
                <span
                    className={styles.bubble}
                    style={{ left: bubbleLeft }}
                    aria-hidden="true"
                />
            )}
            {tabs.map((tab, i) => {
                const isActive = i === activeIndex;
                return (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        ref={(el) => { tabRefs.current[i] = el; }}
                        className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <span className={styles.iconWrap}>{tab.icon}</span>
                    </Link>
                );
            })}
        </nav>
    );
}