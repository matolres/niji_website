import styles from "@/app/scss/footer.module.scss"
import Image from "next/image"

export default function Footer() {
    return(
        <nav className={styles.container_1}>
            <div className={styles.container_1_1}>
                <ul>
                    <li>FAQ</li>
                    <li>Return policy</li>
                    <li>Shipping</li>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className={styles.container_1_2}>
                <Image
                src="/logo_nijicorp_blanc.png"
                alt=""
                width={200}
                height={60}
                />
            </div>
            <div className={styles.container_1_3}>
                <ul>
                    <li>Contact</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </nav>
    )
}