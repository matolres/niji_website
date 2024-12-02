import styles from "@/app/scss/footer.module.scss"
import Image from "next/image"

export default function Footer() {
    return(
        <nav className={styles.container_1}>
            <div className={styles.container_1_1}>
            <div className={styles.container_1_1_1}>
                <p>Legal</p>
                <ul>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className={styles.container_1_1_1}>
                <p>Help/Support</p>
                <ul>
                    <li>FAQ</li>
                    <li>Shipping</li>
                    <li>Return policy</li>
                </ul>
            </div>
            </div>
            <div className={styles.container_1_2}>
                <Image
                src="/logo_nijicorp_blanc.png"
                alt=""
                width={200}
                height={60}
                />
            </div>
            <div className={styles.container_1_1}>
            <div className={styles.container_1_3}>
                <p>Brand</p>
                <ul>
                    <li>About us</li>

                </ul>
            </div>
            <div className={styles.container_1_3}>
                <p>Contact</p>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>TikTok</li>
                </ul>
            </div>
            </div>
            
        </nav>
    )
}