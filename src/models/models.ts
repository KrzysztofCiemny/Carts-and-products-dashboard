export interface ThemeType {
  background: string;
  text: string;
}

export interface CartBody {
  id: number;
  totalQuantity: number;
  total: number;
}

export interface ProductBody {
  id: number;
  title: string;
  price: number;
}
