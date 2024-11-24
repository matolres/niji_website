import Link from "next/link"
import styles from "@/app/scss/header.module.scss"
import Image from "next/image"

export default function Header() {
    return(
        <header className={styles.container_1}>
            <nav className={styles.container_1_1}>
                <ul className={styles.container_1_1_1}>
                    <li className={styles.menu_item}><Link href="/">shop</Link></li>
                    <li className={styles.menu_item}><Link href="/about">event</Link></li>
                    <li className={styles.menu_item}><Link href="/about">brand</Link></li>
                    <li className={styles.menu_item}><Link href="/contact">gallery</Link></li>
                </ul>
                <div className={styles.container_1_1_2}>
                <Image 
                    src="/logo.png"
                    alt="logo etoile"
                    width={60}
                    height={70}
                    >
                    </Image>
                </div>
                
                <div className={styles.container_1_1_3}>
                <svg fill="#FFFFFF" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M216,68H171.81006a43.99152,43.99152,0,0,0-87.62012,0H40A12.01312,12.01312,0,0,0,28,80V208a12.01312,12.01312,0,0,0,12,12H216a12.01312,12.01312,0,0,0,12-12V80A12.01312,12.01312,0,0,0,216,68ZM128,36a36.04775,36.04775,0,0,1,35.77246,32H92.22754A36.04775,36.04775,0,0,1,128,36Zm92,172a4.00427,4.00427,0,0,1-4,4H40a4.00427,4.00427,0,0,1-4-4V80a4.00427,4.00427,0,0,1,4-4H216a4.00427,4.00427,0,0,1,4,4Z"></path> </g></svg>
                </div>
                
            </nav>
        </header>
    )
}