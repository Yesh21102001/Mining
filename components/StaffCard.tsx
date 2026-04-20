"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/StaffPage.module.css";

interface StaffCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    index?: number;
}

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

export default function StaffCard({ name, role, image }: StaffCardProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={styles.staffCard}>

            {/* Photo fills entire card */}
            <div className={styles.staffPhotoWrap}>
                {!imgError && image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className={styles.staffPhoto}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={styles.staffFallback}>
                        {getInitials(name)}
                    </div>
                )}
            </div>

            {/* Name pill overlaid at bottom */}
            <div className={styles.staffInfo}>
                <div className={styles.staffText}>
                    <p className={styles.staffName}>{name}</p>
                    <p className={styles.staffRole}>{role}</p>
                </div>
            </div>

        </div>
    );
}