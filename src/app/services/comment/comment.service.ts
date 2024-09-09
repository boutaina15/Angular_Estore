import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  getComments() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getComment():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${environement.apiUrl}/comment`);
  }

  public addComment(comment: Comment):Observable<Comment>{
    return this.http.post<Comment>(`${environement.apiUrl}/comment/add`, comment);
  }
  
  public updateComment(id: number, comment: Comment):Observable<Comment>{
    return this.http.put<Comment>(`${environement.apiUrl}/comment/update/${id}`, comment);
  }

  public deleteComment(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/comment/delete/${id}`);
  }
}
