/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response,handleHttpErrors } from '../Interfaces/api-response.interface';
import { Item } from '../Interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private API_URL = "http://localhost:3000/api/v1/shopping-list";
  constructor(private http: HttpClient) { }



  getAllItem(): Observable<Response<Item[]>>{
    return this.http.get<Response<Item[]>>(this.API_URL).pipe(catchError((data)=> { throw new Error(data);}));
  }

  getItemById(id:string): Observable<Response<Item>>{
    return this.http.get<Response<Item>>(this.API_URL + '/'+ id).pipe(catchError(handleHttpErrors));
  }

  createItem(data:Item): Observable<Response<Item>>{
    return this.http.post<Response<Item>>(this.API_URL, data).pipe(catchError(handleHttpErrors));
  }

  updateItem(id: string, data:Item): Observable<Response<Item>>{
    return this.http.put<Response<Item>>(this.API_URL + '/' + id, data).pipe(catchError(handleHttpErrors));
  }

  deleteItem(id:string): Observable<Response<Item>>{
    return this.http.delete<Response<Item>>(this.API_URL + '/' + id).pipe(catchError(handleHttpErrors));
  }

}
