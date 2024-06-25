import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteImageService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
