import { Dish } from './Dish';

export interface Order {
  id: number;
  dishes: Dish[];
  totalPrice: number;
}
