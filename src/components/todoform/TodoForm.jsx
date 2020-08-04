import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFromSubmit = e => {
    e.preventDefault();
    if (!value) {
      alert("isi dong");
      return;
    }

    if (value.length > 40) {
      alert("we cuma 40 saja kah");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={handleFromSubmit}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
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
