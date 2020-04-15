import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  bookList: any[] = [1, 2, 3];

  constructor(private router: Router, private bookService: BookService) {}

  getBookList() {
    // this.bookService.getBookList.subscribe(data => {
    //   this.bookList = data.results;
    //   this.bookService.setBooks(this.bookList);
    //   console.log(this.bookList);
    //   this.router.navigate(["results"]);

    console.log(this.bookList);
    this.bookService
      .getBookList()
      .subscribe((data) => (this.bookList = data.results));
    console.log(this.bookList);
    this.bookService.setBooks(this.bookList);

    // this.router.navigate(['results']);
  }
  displayBooks() {
    console.log(this.bookList);
  }

  ngOnInit() {}
}
