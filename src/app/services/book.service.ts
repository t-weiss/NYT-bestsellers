import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=12uhHkf2Tvl0l7fxLQ1Ay81KSQGLtAyp'
    );
  }
}
