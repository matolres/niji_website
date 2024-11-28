export async function shopifyFetch<T>({
    query,
    variables,
  }: {
    query: string;
    variables?: Record<string, unknown>;
  }): Promise<{ status: number; data?: T; error?: string }> {
    const endpoint = process.env.NEXT_PUBLIC_STORE_URL ?? '';
    const key = process.env.NEXT_PUBLIC_STOREFRONT_PUBLIC_ACCESS_TOKEN ?? '';
    console.log('Store URL:', process.env.NEXT_PUBLIC_STORE_URL);
    console.log('Access Token:', process.env.NEXT_PUBLIC_STOREFRONT_PUBLIC_ACCESS_TOKEN);
  
    if (!endpoint || !key) {
      console.error('NEXT_PUBLIC_STORE_URL:', endpoint);
      console.error('NEXT_PUBLIC_STOREFRONT_PUBLIC_ACCESS_TOKEN:', key);
      throw new Error('Environment variables are missing');
    }
  
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key,
        },
        body: JSON.stringify({ query, variables }),
      });
  
      const responseBody = await result.json();
  
      return {
        status: result.status,
        data: responseBody.data,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        status: 500,
        error: 'Error receiving data',
      };
    }
  }
  