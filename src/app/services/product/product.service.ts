import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${environement.apiUrl}/product`);
  }

  public addProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${environement.apiUrl}/product/add`, product);
  }
  
  public updateProduct(id: number, product: Product):Observable<Product>{
    return this.http.put<Product>(`${environement.apiUrl}/product/update/${id}`, product);
  }

  public deleteProduct(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/product/delete/${id}`);
  }
}
