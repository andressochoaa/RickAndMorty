import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<any>{
    return this.http.get<any>(`${this.urlApi}`);
  }

  public getPersonaje(id: number): Observable<any>{
    return this.http.get<any>(`${this.urlApi}${id}`);
  }
}
