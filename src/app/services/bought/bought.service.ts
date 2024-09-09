import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bought } from 'src/app/models/Bought';
import { environement } from 'src/environement/environement';
@Injectable({
  providedIn: 'root'
})
export class BoughtService {

  getBoughts() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getBought():Observable<Bought[]>{
    return this.http.get<Bought[]>(`${environement.apiUrl}/bought`);
  }

  public addBought(bought: Bought):Observable<Bought>{
    return this.http.post<Bought>(`${environement.apiUrl}/bought/add`, bought);
  }
  
  public updateBought(id: number, bought: Bought):Observable<Bought>{
    return this.http.put<Bought>(`${environement.apiUrl}/bought/update/${id}`, bought);
  }

  public deleteBought(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/bought/delete/${id}`);
  }
}
