import { shopifyFetch } from "./lib/shopify";
import Homepage from "./pages/homepage/homepage";

const query = `
{
  collections(first: 10) {
    edges {
      node {
        title
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              description
              media(first: 10) {
                edges {
                  node {
                    ... on MediaImage {
                      id
                      image {
                        src
                      }
                    }
                  }
                }
              }
              variants(first: 10) {
                nodes {
                  price {
                    amount
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;

export default async function Home() {
  const response = await shopifyFetch<{
    collections: {
      edges: {
        node: {
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
      }[];
    };
  }>({ query }); // Use the `query` variable declared above

  if (response.error || !response.data) {
    console.error('Failed to fetch collections', response.error);
    return <div>Error loading collections</div>;
  }
console.log("data", response.data)
  const collections = response.data.collections;

  return (
    <>
      <Homepage collections={collections} />
    </>
  );
}