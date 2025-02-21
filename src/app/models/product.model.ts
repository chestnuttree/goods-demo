/**
 * Defines the structure of a product from the FakeStore API
 * Note: Matches the API response structure directly
 */
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }