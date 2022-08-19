/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../Interfaces/category.interface';
import { handleHttpErrors } from '../Interfaces/api-response.interface';
import { Response } from '../Interfaces/api-response.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = "http://localhost:3000/categories";
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Response<Category[]>>{
    return this.http.get<Response<Category[]>>(this.API_URL).pipe(catchError(handleHttpErrors));
  }

  getCategoryById(id:string): Observable<Response<Category>>{
    return this.http.get<Response<Category>>(this.API_URL + '/'+ id).pipe(catchError(handleHttpErrors));
  }

  createCategory(data:Category): Observable<Response<Category>>{
    return this.http.post<Response<Category>>(this.API_URL, data).pipe(catchError(handleHttpErrors));
  }

  updateCategory(id: string, data:Category): Observable<Response<Category>>{
    return this.http.put<Response<Category>>(this.API_URL + '/' + id, data).pipe(catchError(handleHttpErrors));
  }

  deleteCategory(id: string): Observable<Response<Category>>{
    return this.http.delete<Response<Category>>(this.API_URL + '/' + id).pipe(catchError(handleHttpErrors));
  }
}
