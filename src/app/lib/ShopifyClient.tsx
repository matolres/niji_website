import { createGraphQLClient } from '@shopify/graphql-client';

export const shopifyClient = createGraphQLClient({
  url: process.env.STORE_URL || '',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': process.env.STOREFRONT_PUBLIC_ACCESS_TOKEN || '',
  },
  retries: 3, // Number of retries for failed requests
});
