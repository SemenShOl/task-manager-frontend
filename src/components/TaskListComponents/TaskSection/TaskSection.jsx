import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { TaskInput } from "../TaskInput/TaskInput";
import { TodoFilters } from "../TodoFilters/TodoFilters";
import cl from "./TodoSection.module.scss";
import { useDispatch } from "react-redux";
import {
  fetchRemoveTodo,
  fetchAddTodo,
  fetchCompleteTodo,
} from "../../../redux/slices/todos";
import { useParams } from "react-router-dom";

export const TodoSection = ({ todos }) => {
  const [filter, setFilter] = useState("all");
  const params = useParams();
  const dispatch = useDispatch();
  console.log(todos);
  const filteredTodos = (() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.complteted);
      case "completed":
        return todos.filter((todo) => todo.complteted);
      default:
        return todos;
    }
  })();

  const onCompleteTodos = (id) => {
    const newValue = !todos.find((todo) => todo._id === id).completed;
    dispatch(fetchCompleteTodo({ id, newValue }));
  };
  const addTodo = (text) =>
    text.trim() !== ""
      ? dispatch(
          fetchAddTodo({
            title: text,
            text: "",
            completed: false,
            date: new Date(),
          })
        )
      : undefined;

  const deleteTodo = (id) => dispatch(fetchRemoveTodo(id));

  return (
    <div className={cl.wrapper}>
      {/* <h2>TodoList</h2> */}
      <TaskInput addTodo={addTodo} />
      <TodoFilters filter={filter} setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        // onChangeTodos={onChangeTodos}
        onCompleteTodos={onCompleteTodos}
      />
    </div>
  );
};
