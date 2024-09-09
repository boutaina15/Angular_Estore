import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getUser():Observable<User[]>{
    return this.http.get<User[]>(`${environement.apiUrl}/user`);
  }

  public addUser(user: User):Observable<User>{
    return this.http.post<User>(`${environement.apiUrl}/user/add`, user);
  }
  
  public updateUser(id: number, user: User):Observable<User>{
    return this.http.put<User>(`${environement.apiUrl}/user/update/${id}`, user);
  }

  public deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/user/delete/${id}`);
  }
}
