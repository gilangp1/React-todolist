import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "nasi kuning"
    },
    {
      text: "nasi goreng"
    },
    {
      text: "nasi uduk"
    },
    {
      text: "nasi kotak"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
