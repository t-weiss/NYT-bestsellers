import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: any[];
  readList: any[] = [];
  constructor(private http: HttpClient) {}

  getReadList() {
    return this.readList;
  }

  setBookList(books) {
    this.readList = books;
  }

  setBooks(books) {
    this.books = books;
  }

  getBooks() {
    return this.books;
  }
  getBookList(): Observable<any> {
    return this.http.get(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=12uhHkf2Tvl0l7fxLQ1Ay81KSQGLtAyp'
    );
  }
}
