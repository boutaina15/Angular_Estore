import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from 'src/app/models/Wishlist';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  getWishlists() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getWishlist():Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>(`${environement.apiUrl}/wishlist`);
  }

  public addWishlist(wishlist: Wishlist):Observable<Wishlist>{
    return this.http.post<Wishlist>(`${environement.apiUrl}/wishlist/add`, wishlist);
  }
  
  public updateWishlist(id: number, wishlist: Wishlist):Observable<Wishlist>{
    return this.http.put<Wishlist>(`${environement.apiUrl}/wishlist/update/${id}`, wishlist);
  }

  public deleteWishlist(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/wishlist/delete/${id}`);
  }
}
