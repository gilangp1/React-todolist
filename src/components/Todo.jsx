import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default Todo;
