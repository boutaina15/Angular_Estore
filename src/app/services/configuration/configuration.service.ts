import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from 'src/app/models/Configuration';
import { environement } from 'src/environement/environement';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  getConfigurations() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient){}

  public getConfiguration():Observable<Configuration[]>{
    return this.http.get<Configuration[]>(`${environement.apiUrl}/configuration`);
  }

  public addConfiguration(configuration: Configuration):Observable<Configuration>{
    return this.http.post<Configuration>(`${environement.apiUrl}/configuration/add`, configuration);
  }
  
  public updateConfiguration(id: number, configuration: Configuration):Observable<Configuration>{
    return this.http.put<Configuration>(`${environement.apiUrl}/configuration/update/${id}`, configuration);
  }

  public deleteConfiguration(id: number):Observable<any>{
    return this.http.delete<any>(`${environement.apiUrl}/configuration/delete/${id}`);
  }
}
