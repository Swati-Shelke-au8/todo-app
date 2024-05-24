import React from "react";
import { FixedSizeList as List } from "react-window";
import TodoItem from "./TodoItem";
import { Todo } from "../Interfaces/Todo";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  const Row = ({ index, style }) => {
    const todo = todos[index];
    return (
      <div style={style}>
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      </div>
    );
  };

  return (
    <List height={500} itemCount={todos.length} itemSize={50} width={"100%"}>
      {Row}
    </List>
  );
};

export default TodoList;
