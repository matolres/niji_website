import Image from "next/image";
import styles from "@/app/page.module.scss"


export default function Home() {
  return (
   <main className={styles.main_container}>
    <div className={styles.header_background}></div>
    <div className={styles.container_1}>
      <Image className={styles.Background_image}
      src="https://cdn.shopify.com/s/files/1/0896/4272/9819/files/landingpage-image.jpg?v=1732368446"
      fill={true}
      alt="background image niji t-shirts"
      />
    </div>
    <section className={styles.container_2}>
      <h1>Signature collection</h1>
      <div className={styles.container_2_1}>
        <div className={styles.container_2_1_1}>
          <div className={styles.image_container}>
          <Image
          src="/Mannequin_Image1 2.png"
          alt=""
          width={400}
          height={400}
          />
          </div>
          <div className={styles.product_text}>
            <p>Signature Star Tee</p>
            <p>500 DKK</p>
          </div>
        </div>
        <div className={styles.container_2_1_2}>
          <div className={styles.image_container}>
          <Image
          src="/Mannequin_Image1.png"
          alt=""
          width={400}
          height={400}
          />
          </div>
          <div className={styles.product_text}>
            <p>Signature Star Tee</p>
            <p>500 DKK</p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.container_3}>
       <div className={styles.container_3_1}>
        <div className={styles.container_3_1_1}>

        </div>
        <div className={styles.container_3_1_2}>

        </div>
       </div>
       <div className={styles.container_3_2}>

       </div>
    </section>


   </main>

  );
}
