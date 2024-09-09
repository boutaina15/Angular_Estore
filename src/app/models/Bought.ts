import { Product } from "./Product";
import { User } from "./User";

export interface Bought {
    id: number;
    user:User;
    products:Product;
  }
  