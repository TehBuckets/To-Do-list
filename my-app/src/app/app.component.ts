import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-do list';
  todos = [
              //These are pre made to do lists in order to test.
    /*{ 
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
    }*/
  ];

  //Adds a todo
  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  //Deletes a todo
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }

  //Changes the state of the todo, from done to undone and vice versa
  changeDone(todo){
    var done = false;
    if(done){
      this.todos = this.todos.filter( t => t.done = false )
      done = true;
    }else{
      this.todos = this.todos.filter( t => t.done = true )
      done = false;
   }
  }
}
