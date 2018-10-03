import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
// Data service
export class BooksService {

  constructor(private http: HttpClient) { }

  // Ajax request for books data
  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4200/assets/data/books.json');
  }
}
