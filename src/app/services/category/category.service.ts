import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategories() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${environement.apiUrl}/category`);
  }

  public addCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(`${environement.apiUrl}/category/add`, category);
  }
  
  public updateCategory(id: number, category: Category):Observable<Category>{
    return this.http.put<Category>(`${environement.apiUrl}/category/update/${id}`, category);
  }

  public deleteCategory(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/category/delete/${id}`);
  }
}
