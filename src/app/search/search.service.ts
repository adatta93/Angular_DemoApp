import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    search(term: string) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts?q=' + term);
    }
}