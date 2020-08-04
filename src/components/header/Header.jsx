import React from "react";
import PropTypes from "prop-types";

import styles from "./header.module.css";

import Button from "../button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
      <Button onClick={showAddToggle} text={showAdd ? "Finish" : "Add"} />
      <h1 className={styles.headerTitle}>Todo Lists</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" clearTodos={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.PropTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
