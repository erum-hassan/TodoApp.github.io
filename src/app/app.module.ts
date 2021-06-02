import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddtodoComponent } from './MyComponents/addtodo/addtodo.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import {FormsModule } from '@angular/forms';
import { TodoitemComponent } from './MyComponents/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodosComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
