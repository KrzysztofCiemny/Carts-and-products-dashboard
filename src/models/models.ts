export interface ThemeType {
  background: string;
  text: string;
}

export interface CartBody {
  id: number;
  totalQuantity: number;
  totalProducts: number;
  total: number;
  products: ProductBody[];
}

export interface ProductBody {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
}

export interface CreatedCartBody {
  id: number;
  quantity: number;
}
