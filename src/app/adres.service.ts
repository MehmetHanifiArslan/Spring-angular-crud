import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdresService {
  private baseUrl = 'http://localhost:8080/adres';

  constructor(private http: HttpClient) {}

  getAdresList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createAdres(adres: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, adres);
  }

  deleteAdres(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateAdres(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getAdres(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
