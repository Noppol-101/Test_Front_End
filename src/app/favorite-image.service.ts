import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteImageService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllImages() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addImage(imageData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, imageData);
  }
}
