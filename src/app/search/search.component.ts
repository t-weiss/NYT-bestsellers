import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private bookService: BookService) {}

  books: any = 'working';

  getBooks() {
    // console.log(this.books);
    this.bookService.getBooks().subscribe((books) => (this.books = books));
    console.log(this.books);

    // this.router.navigate(["results"])
  }
  displayBooks() {
    console.log(this.books);
  }
  ngOnInit(): void {}
}
