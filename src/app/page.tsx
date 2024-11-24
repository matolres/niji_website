import Image from "next/image";
import styles from "@/app/page.module.scss"

export default function Home() {
  return (
   <main className={styles.main_container}>
    <div className={styles.container_1}>
      <Image className={styles.Background_image}
      src="https://cdn.shopify.com/s/files/1/0896/4272/9819/files/landingpage-image.jpg?v=1732368446"
      fill={true}
      alt="background image niji t-shirts"
      />
    </div>
    <section className={styles.container_2}>
      <h1>Signature collection</h1>
      

    </section>


   </main>

  );
}
