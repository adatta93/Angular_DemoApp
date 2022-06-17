import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';
import { MessageDirective } from './message.directive';
import { RepeatDirective } from './repeat.directive';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { SearchComponent } from './search/search.component';
import { BookService } from './book.service';
import { SearchService } from './search/search.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMockService } from './in-memory-mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookComponent,
    ChildComponent,
    SortPipe,
    MessageDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryMockService)
    /* MegaMenuModule,
    DropdownModule */
  ],
  providers: [
    BookService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
