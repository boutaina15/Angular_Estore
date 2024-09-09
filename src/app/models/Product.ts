import { Bought } from "./Bought";
import { Cart } from "./Cart";
import { Category } from "./Category";
import { Wishlist } from "./Wishlist";

export interface Product {
    id: number;
    title: String;
    price: number;
    quantity: number;
    soldQte: number;
    brand: String;
    rating: String;
    shortDescription: String;
    description: String;
    picture: String;
    discountPercentage: number;
    discount: boolean;
    discountStart: Date;
    discountEnd: Date;
    color: String;
    category:Category;
    boughts:Bought;
    wishlsts:Wishlist;
    carts:Cart;
    
   
  }