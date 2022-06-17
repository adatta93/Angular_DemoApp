import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
class Course {
  constructor(
    public courseId: number,
    public courseName: string,
    public duration: number
  ) { }
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  
  @Input() msg = '';
  @Output() onRegister = new EventEmitter<string>();
  course:Course = new Course(1,'Angular',20);
  submitted:boolean = false;

  constructor() { }

  ngOnChanges(changes) {
    console.log('Child Change...',changes);
  }

  register(){
    this.onRegister.emit(this.msg);
  }

  onSubmit(){
    this.submitted = true;
  }

}
