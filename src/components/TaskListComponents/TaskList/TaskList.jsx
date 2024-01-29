import React, { FC, useState } from "react";
import cl from "./TodoList.module.scss";
import Todo from "../Todo/Todo";
import { TaskInput } from "../TaskInput/TaskInput";
import { TodoObject, TodoProps } from "../Todo/Todo";

const TodoList = ({ todos, onCompleteTodos, deleteTodo }) => {
  return (
    <div className={cl.wrapper}>
      {todos.map((todo) => {
        console.log(todo);
        return (
          <Todo
            onChangeTodoComplete={() => onCompleteTodos(todo._id)}
            onDeleteTodo={() => deleteTodo(todo._id)}
            key={todo._id}
            title={todo.title}
            id={todo._id}
            complteted={todo.completed}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
