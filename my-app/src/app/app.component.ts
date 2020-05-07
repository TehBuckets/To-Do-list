import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-do list';
  todos = [
    { 
      label: 'Bring Milk', 
      done: true, 
      priority: 3
    },
    { 
      label: 'Bring Pickles', 
      done: false, 
      priority: 1
    },
    { 
      label: 'Pay bills', 
     done: false, 
     priority: 5
   },
   { 
      label: 'Clean House', 
      done: false, 
      priority: 4
    }
  ];

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}
