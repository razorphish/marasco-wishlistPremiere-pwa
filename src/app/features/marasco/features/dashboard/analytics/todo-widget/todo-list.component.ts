import { Subject } from 'rxjs';
import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  public items: Array<Todo> = [];

  @Input() public state: any;

  constructor(private el: ElementRef, private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.subject
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((todos: Array<Todo>) => {
        this.setItems(todos);
      });

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
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
