import styles from "../styles/StaffPage.module.css";

const AVATAR_COLORS = [
    "avatarTeal",
    "avatarBlue",
    "avatarPurple",
    "avatarCoral",
    "avatarAmber",
    "avatarPink",
] as const;

interface StaffCardProps {
    name: string;
    role: string;
    bio: string;
    index?: number;
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

export default function StaffCard({ name, role, bio, index = 0 }: StaffCardProps) {
    const initials = getInitials(name);
    const colorKey = AVATAR_COLORS[index % AVATAR_COLORS.length];

    return (
        <div className={styles.staffCard}>
            <div className={`${styles.staffAvatar} ${styles[colorKey]}`}>
                {initials}
            </div>
            <div className={styles.cardBody}>
                <p className={styles.staffName}>{name}</p>
                <p className={styles.staffRole}>{role}</p>
                <div className={styles.staffSep} />
                <p className={styles.staffBio}>{bio}</p>
            </div>
        </div>
    );
}