import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo)
  {
    this.todoDelete.emit(todo);
  }
  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxClick(todo)
  {
    this.todoCheckBox.emit(todo);
  }

}
