import { Component, OnInit ,Input,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  

  @Input() todoAdd:EventEmitter<Todo> = new  EventEmitter()
  @Input() tododelete:EventEmitter<Todo> = new  EventEmitter()

 
  constructor() { 
   
   

  }

  ngOnInit(): void {
  }
  todos:Todo[]=[
   
   ]

  AddtoDo(todo:Todo)
  {
    console.log(todo)
    this.todos.push(todo);
    
  }
  deletetodo(todo:Todo)
  {
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)

  }
  

}
