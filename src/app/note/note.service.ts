import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Note } from './note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiURL="http://localhost:5000/notes/";

  httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}

  constructor(private httpClient:HttpClient) { }
  getAllNotes():Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.apiURL+'/getAllNotes')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(note:any):Observable<Note>{
    return this.httpClient.post<Note>(this.apiURL +'/addNotes/',JSON.stringify(note),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:number):Observable<Note>{
    return this.httpClient.get<Note>(this.apiURL+'/getNote/'+ id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:any,note:any):Observable<Note>{
    return this.httpClient.put<Note>(this.apiURL+ '/editNote/'+ id,JSON.stringify(note),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  delete(id:any):Observable<Note>{
    return this.httpClient.delete<Note>(this.apiURL+ '/deleteNote/'+ id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


}

