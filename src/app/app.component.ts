import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  percent: string;
  data: string = 'Angular 8';
  message: string = '';
  public counter: number = 100;
  isBook: boolean = true;
  isHello: boolean = false;

  constructor(private book: BookService) { }

  updateCounter() {
    if (this.counter < 200) {
      setTimeout(_ => {
        this.counter = this.counter + (Math.floor(Math.random() * 2) + 1);
        this.percent = ((this.counter / 200) * 100).toFixed(1).toString();
        this.updateCounter();
      }, 100);
    }
  }

  chooseHello() {
    this.isBook = false;
    this.isHello = true;
  }

  chooseBook() {
    this.isBook = true;
    this.isHello = false;
  }

  register(name: string) {
    this.message = `Your message is ${name}`;
  }
}
