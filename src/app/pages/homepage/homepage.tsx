import Image from "next/image";
import styles from "@/app/page.module.scss"

type Collection = {
    title: string;
    products: {
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
          description: string;
          media: {
            edges: {
              node: {
                image: {
                  src: string;
                };
              };
            }[];
          };
          variants: {
            nodes: {
              price: {
                amount: string;
              };
              selectedOptions: {
                name: string;
                value: string;
              }[];
            }[];
          };
        };
      }[];
    };
  };
  type HomepageProps = {
    collections: {
      edges: {
        node: Collection;
      }[];
    };
  };
  
  export default function Homepage({ collections }: HomepageProps) {
    return (
        <main className={styles.main_container}>
          <div className={styles.background}></div>
          <div className={styles.container_1}>
            <Image className={styles.container_1_1}
            alt=""
            src="https://cdn.shopify.com/s/files/1/0896/4272/9819/files/landingpage-image.jpg?v=1732370153"
            width={1000}
            height={1000}
            />
          </div>
          {collections.edges.map((collection) => (
            <div className={styles.container_2} key={collection.node.title}>
              <h1 className={styles.container_2_1}>{collection.node.title}</h1>
              {collection.node.products.edges.map((product) => (
                <div key={product.node.id}>
                  <div className={styles.container_2_2}>
                  {product.node.media.edges.length > 0 && (
                    <Image
                      src={product.node.media.edges[0].node.image.src}
                      alt={product.node.title}
                      width="400"
                      height="400"
                    />
                  )}
                  <div className={styles.container_2_2_1}>
                   {product.node.variants.nodes.map((variant, index) => (
                    <div  key={index}>
                      <ul >
                        {variant.selectedOptions.map((option, i) => (
                          <li key={i}>
                            {option.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  </div>
                  </div>
                  <div className={styles.container_2_4}>
                  <p>{product.node.title}</p>
                  <p>500 DKK</p>
                  </div>
                  
                 
                </div>
              ))}
            </div>
          ))}
          <div className={styles.container_3}>
            <div className={styles.container_3_1}>
            <div className={styles.container_3_1_1}>
              <Image className={styles.image}
              src="/image-1.png"
              alt=""
              width={700}
              height={800}
              style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.container_3_1_1}>
            <Image className={styles.image}
              src="/image-2.png"
              alt=""
              width={700}
              height={800}
              style={{ objectFit: 'cover' }}
              />
            </div>

            </div>
            
            <div className={styles.container_3_2}>
            <Image className={styles.image}
              src="/image-3.png"
              alt=""
              width={1450}
              height={800}
              style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </main>
      );
  }