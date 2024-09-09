import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/Cart';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getCarts() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(`${environement.apiUrl}/cart`);
  }

  public addCart(cart: Cart):Observable<Cart>{
    return this.http.post<Cart>(`${environement.apiUrl}/cart/add`, cart);
  }
  
  public updateCart(id: number, cart: Cart):Observable<Cart>{
    return this.http.put<Cart>(`${environement.apiUrl}/cart/update/${id}`, cart);
  }

  public deleteCart(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/cart/delete/${id}`);
  }
}
