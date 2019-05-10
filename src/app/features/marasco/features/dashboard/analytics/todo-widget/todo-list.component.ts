import { Subject } from 'rxjs';
import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { SubSink } from 'subsink';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  public items: Array<Todo> = [];

  @Input() public state: any;

  constructor(private el: ElementRef, private todoService: TodoService) {}

  ngOnInit() {
    this.subs.add(
      this.todoService.subject.subscribe((todos: Array<Todo>) => {
        this.setItems(todos);
      })
    );

    this.setItems(this.todoService.todos);
  }

  setItems(todos: Array<Todo>) {
    this.items = todos.filter((it) => it.state == this.state.name);
  }

  toggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
