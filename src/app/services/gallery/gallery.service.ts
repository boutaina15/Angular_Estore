import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from 'src/app/models/Gallery';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  getGalleries() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getGallery():Observable<Gallery[]>{
    return this.http.get<Gallery[]>(`${environement.apiUrl}/gallery`);
  }

  public addGallery(gallery: Gallery):Observable<Gallery>{
    return this.http.post<Gallery>(`${environement.apiUrl}/gallery/add`, gallery);
  }
  
  public updateGallery(id: number, gallery: Gallery):Observable<Gallery>{
    return this.http.put<Gallery>(`${environement.apiUrl}/gallery/update/${id}`, gallery);
  }

  public deleteGallery(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/gallery/delete/${id}`);
  }
}
