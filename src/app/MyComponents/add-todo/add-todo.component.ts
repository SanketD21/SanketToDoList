import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  // Since we are not able to get todo-values here we call the parent via this emitter
  // We send it through in following direction child ===> parent
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title:string;
  desc:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const todo = 
      {
        sno:5,
        title:this.title,
        desc:this.desc,
        active:true
      }
      this.todoAdd.emit(todo);
    }
}
