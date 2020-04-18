import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MaterialInfo } from './materialinfo';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/matInfo';

@Injectable({
  providedIn: 'root'
})
export class MaterialApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  getMaterials(): Observable<MaterialInfo[]> {
    return this.http.get<MaterialInfo[]>(apiUrl)
      .pipe(
        tap(article => console.log('fetched Materials')),
        catchError(this.handleError('getMaterials', []))
      );
  }

  addMaterialInfo(materialInfo: MaterialInfo): Observable<MaterialInfo> {
    return this.http.post<MaterialInfo>(apiUrl, materialInfo, httpOptions).pipe(
      tap((art: MaterialInfo) => console.log(`added MaterialInfo w/ id=${art._id}`)),
      catchError(this.handleError<MaterialInfo>('addMaterialInfo'))
    );
  }
  getMaterial(id: string): Observable<MaterialInfo> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<MaterialInfo>(url).pipe(
      tap(_ => console.log(`fetched article id=${id}`)),
      catchError(this.handleError<MaterialInfo>(`getArticle id=${id}`))
    );
  }
  updateMaterialInfo(id: any, materialInfo: MaterialInfo): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, materialInfo, httpOptions).pipe(
      tap(_ => console.log(`updated material Info id=${id}`)),
      catchError(this.handleError<any>('updateMaterialInfo'))
    );
  }

  deleteMaterialInfo(id: any): Observable<MaterialInfo> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<MaterialInfo>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted MaterialInfo id=${id}`)),
      catchError(this.handleError<MaterialInfo>('deleteMaterialInfo'))
    );
  }
}
