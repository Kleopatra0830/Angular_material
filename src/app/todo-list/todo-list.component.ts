import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from '../todo.service';
import { TodoItem } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['userId','id',  'title', 'completed'];
  dataSource = new MatTableDataSource<TodoItem>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
