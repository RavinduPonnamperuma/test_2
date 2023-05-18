import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  //fake data base
  todos = [
    { id: "1", task: "create nest api", ststus: "incomplete" },
    { id: "2", task: "Add routing nest api", ststus: "pending" },
    { id: "3", task: "connect nest api", ststus: "complete" }
  ]

  // display all data
  findTodo(): any {
    return (this.todos)
  }

  //add new data to the database
  addTodo(newTodo: any): any {
    this.todos.push(newTodo)
    return (this.todos)
  }

  //delete item from database
  deleteTodo(id: string): any {
    //create new array without the item that we want to delete
    // remove element from thr array by using filter funtion

    let myArray = this.todos.filter(function (obj) {
      return obj.id !== id;
    });
    this.todos = myArray;
    return (this.todos);
  }

  //update array 
  updteTodo(id: string, newTodo: any): any {
    const objIndex = this.todos.findIndex((obj => obj.id == id))
    this.todos[objIndex].ststus=newTodo.ststus;
    return "updated";

  }


}


