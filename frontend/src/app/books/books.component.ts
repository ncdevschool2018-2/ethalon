import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // Local variables
  books: Book[] = [];

  // Dependency injection for BooksService into BooksComponent
  constructor(private booksService: BooksService) {}

  // Calls on component init
  ngOnInit() {
    // Get data from BooksService
    this.booksService.getBooks().subscribe(books => {
      // Parse json response into local array
      this.books = books as Book[];

      // Check data in console
      console.log(this.books);
    });
  }
}
