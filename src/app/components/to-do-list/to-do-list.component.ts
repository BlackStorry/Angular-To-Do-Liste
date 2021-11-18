import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { ToDoDataService } from '../../services/to-do-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDo: ToDo;
  constructor(private toDoDataService: ToDoDataService) {}

  get toDos(): ToDo[] {
    return this.toDoDataService.toDos;
  }
  ngOnInit() {}

  toggle(toDo: ToDo) {
    this.toDoDataService.toggelToDo(toDo);
  }
}
