import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookService {

    bookUrl: string = 'api/books';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.bookUrl);
    }

    addBook(name: string): Observable<Book> {
        let book = { name };
        let options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<Book>(this.bookUrl, book, options);
    }

    updateBook(book: Book): Observable<Book> {
        book.id = Number(book.id);
        let options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put<Book>(this.bookUrl, book, options);
    }

    deleteBook(id:number):Observable<Book>{
        let url = `${this.bookUrl}/${id}`;
        return this.http.delete<Book>(url);
    }
}