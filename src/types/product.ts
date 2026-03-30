export type Category = 'rosaries' | 'jewelry' | 'home' | 'books';

export type Occasion = 'Baptism' | 'First Communion' | 'Confirmation' | 'Wedding' | 'Christmas' | 'Easter';

export interface Product {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  price: number;
  category: Category;
  occasion_tags: Occasion[];
  images: string[];
  stock_status: boolean;
  featured: boolean;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
