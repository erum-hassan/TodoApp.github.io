import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  
  todoText!: string;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

   

  onSubmit()
  {
    console.log(this.todoText)
    const todo = {
      
      TodoText: this.todoText

    }
    this.todoAdd.emit(todo);
  }

}
