import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

   @Input() todo!:Todo;
   @Output() tododelete:EventEmitter<Todo>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 
  Addtodelete(todo:Todo)
  {
    this.tododelete.emit(todo);
  }
}
