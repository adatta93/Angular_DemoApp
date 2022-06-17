import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  searchField: FormControl;
  searchForm: FormGroup;
  result: any;
  
  constructor(private fb: FormBuilder, private searchService: SearchService) { 
    this.searchField = new FormControl();
    this.searchForm = this.fb.group({
      search: this.searchField
    });
    this.searchField.valueChanges.pipe(
      debounceTime(400),
      switchMap(term => this.searchService.search(term))
    ).subscribe(res => this.result = res);
  }

}
