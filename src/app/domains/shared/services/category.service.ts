import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() { }

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl + 'categories');
  }
}
