"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/bottomNav.module.css";

const tabs = [
    { href: "/", label: "Home", icon: "/icons/home.png" },
    { href: "/about", label: "About", icon: "/icons/info.png" },
    { href: "/services", label: "Services", icon: "/icons/technical-support.png" },
    { href: "/staff", label: "Staff", icon: "/icons/team.png" },
    { href: "/contact", label: "Contact us", icon: "/icons/phone-call.png" },
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
                        <span
                            className={styles.iconWrap}
                            style={{ ["--icon" as string]: `url(${tab.icon})` } as React.CSSProperties}
                            aria-hidden="true"
                        />
                        <span className={styles.label}>{tab.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}