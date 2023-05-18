import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { stringify } from 'querystring';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // resive data from frontend
  @Post("/todo")
  addTodo(@Body() newTodo: any): any {
    return this.appService.addTodo(newTodo);
  }

  // send data to frontend
  @Get("/todo")
  vewTodo(): string {
    return this.appService.findTodo();
  }

  @Put("/todo")
  editTodo(): string {
    return "todo put"
  }

  // extrat parameter from request url, and delete item from the array witch has that id
  @Delete("/todo/:id")
  deleteTodo(@Param('id') id: string): any {
    return this.appService.deleteTodo(id);

  }

  // extrat parameter from request url, and update item in the array witch has that id
  @Patch("/todo/:id")
  patchTodo(@Param('id') id: string, @Body() updateTodo: any): any {
    return this.appService.updteTodo(id, updateTodo)
  }
}

function put(arg0: string): (target: AppController, propertyKey: "editTodo", descriptor: TypedPropertyDescriptor<() => string>) => void | TypedPropertyDescriptor<() => string> {
  throw new Error('Function not implemented.');
}

function param(arg0: string): (target: AppController, propertyKey: "deleteTodo", parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

