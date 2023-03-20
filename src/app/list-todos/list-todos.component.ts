import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
 
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message : string
  // new Todo(1,'learn',false,new Date()),
  // new Todo(2,'work',true,new Date()),
  // new Todo(3,'dance',false,new Date())
  // {id:1, description:'learn'},
  // {id:2, description:'work'},
  // {id:3, description:'dance'},
  // todo = {
  //   id: 1,
  //   description:'Lean to Dance'
  // }
  
    // new Todo(1,'learn',false,new Date()),
    // new Todo(2,'work',true,new Date()),
    // new Todo(3,'dance',false,new Date())
    // {id:1, description:'learn'},
    // {id:2, description:'work'},
    // {id:3, description:'dance'},
    
  
  // todo = {
  //   id: 1,
  //   description:'Lean to Dance'
  // }

  constructor(
    private todoService:TodoDataService,
    private router : Router
    ){}
  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('liorpatael').subscribe(
      response=>{
        console.log(response);
        
        this.todos=response;
      }
    )
  }

  deleteTodo(id:number){
    console.log("Deleted Todo " + id);
    this.todoService.deleteTodo('liorpatael',id).subscribe(
      response=> {
        console.log(response);
        this.message= ` Delete of Todo ${id} Succsessful `
        this.refreshTodos();

      }
    )
    
  }
  updateTodo(id:number){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(['todos',-1]);
  }
}
