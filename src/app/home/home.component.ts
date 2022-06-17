import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myMsg:string='Custom Directive';
  sortOptions:string = '';
  productList = [
    { name: 'Samsung S10', price: 70000},
    { name: 'Apple iPhone X', price: 95000},
    { name: 'Moto G6', price: 18000},
    { name: 'Nokia 8.1', price: 22000},
    { name: 'Vivo V10', price: 35000}
  ];
  data: Observable<number>;
  myArray:number[] = [];
  errors:boolean;
  finished:boolean;

  constructor() { }

  fetchData(){
    this.data = new Observable(observer => {
      setTimeout(_ => observer.next(1), 1000),
      setTimeout(_ => observer.next(2), 2000),
      setTimeout(_ => observer.complete(), 3000)
    });

    let sub = this.data.subscribe(
      val => this.myArray.push(val),
      error => this.errors = true,
      () => this.finished = true
    );
  }

}
