import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books: Book[];
  errMsg: string;

  ngOnInit() {
    this.getBooks();
  }

  constructor(private bookService: BookService) { }

  getBooks() {
    this.bookService.getBooks().subscribe(
      (book: Book[]) => this.books = book,
      error => this.errMsg = error
    );
  }

  addBook(name: string) {
    this.bookService.addBook(name).subscribe(
      (book: Book) => this.books.push(book),
      error => this.errMsg = error
    )
  }

  updateBook(id: number, name: string) {
    let book = new Book();
    book.id = id;
    book.name = name;
    this.bookService.updateBook(book).subscribe(
      success => this.getBooks(),
      error => this.errMsg = error
    )
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(
      success => this.getBooks(),
      error => this.errMsg = error
    )
  }

}
