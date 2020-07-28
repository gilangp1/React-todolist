import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFromSubmit = e => {
    e.preventDefault();
    if (!value) {
      alert("isi dong");
      return;
    }

    addTodo(value);
    setValue("");
  };

  console.log("showAdd", showAdd);

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFromSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
