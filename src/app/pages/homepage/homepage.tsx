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
        <main>
          {collections.edges.map((collection) => (
            <div key={collection.node.title}>
              <h1>{collection.node.title}</h1>
              {collection.node.products.edges.map((product) => (
                <div key={product.node.id}>
                  <h2>{product.node.title}</h2>
                  <p>{product.node.description}</p>
                  {product.node.media.edges.length > 0 && (
                    <Image
                      src={product.node.media.edges[0].node.image.src}
                      alt={product.node.title}
                      width="300"
                      height="300"
                    />
                  )}
                  {product.node.variants.nodes.map((variant, index) => (
                    <div key={index}>
                      <p>Price: {variant.price.amount}</p>
                      <ul>
                        {variant.selectedOptions.map((option, i) => (
                          <li key={i}>
                            {option.name}: {option.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </main>
      );
  }