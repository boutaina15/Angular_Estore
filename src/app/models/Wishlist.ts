import { Product } from "./Product";
import { User } from "./User";

export interface Wishlist {
    id: number;
    user:User;
    products:Product;
  }