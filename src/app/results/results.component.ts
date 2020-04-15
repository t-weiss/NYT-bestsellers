import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  books: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
    console.log('we are here');
  }
}
