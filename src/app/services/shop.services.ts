import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  createShop(user: Shop): Observable<Shop> {
    return this.http.post<Shop>(`${this.apiUrl}/shops`, Shop);
  }

  private apiUrl = 'http://localhost:8083';
  public showSearchResults = true;
  constructor(private http: HttpClient) {}

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.apiUrl}/shops`);
  }
  getShop(id: string): Observable<Shop> {
    return this.http.get<Shop>(`${this.apiUrl}/shops/${id}`).pipe(
      map((shop) => {
        shop.id = Number(id);

        return shop;
      })
    );
    
  }
  updateUser(shop: Shop): Observable<Shop> {
    return this.http.put<Shop>(`${this.apiUrl}/${shop.id}`, shop);
  }

 
  deleteShop(id: string): Observable<Shop> {
    return this.http.delete<Shop>(`${this.apiUrl}/shops/${id}`);
  }
}
