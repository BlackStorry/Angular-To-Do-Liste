import { Injectable } from '@angular/core';
import { ToDo } from '../model/to-do';

@Injectable()
export class ToDoDataService {
  toDos: ToDo[] = [];
  constructor() {
    this.toDos.push(new ToDo('Simon schlagen!', false));
    this.toDos.push(new ToDo('Leon nach Hilfe fragen.', false));
    this.toDos.push(new ToDo('Stefan helfen', true));
    this.toDos.push(new ToDo('Spaß haben!', false, '11.11.2021'));
  }

  saveToDo(toDo: ToDo) {
    this.toDos.unshift(toDo);
  }
  toggelToDo(toDo: ToDo) {
    toDo.done = !toDo.done;
    this.toDos = this.toDos.filter((t) => t == t);
    //   if (toDo.done === true) {
    //     toDo.done = false;
    //   } else {
    //     toDo.done = true;
    //   }
  }
}
