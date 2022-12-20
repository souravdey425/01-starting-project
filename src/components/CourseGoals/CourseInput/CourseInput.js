import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.inavlid ? "red" : "blue")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.inavlid ? "red" : "#ccc")};
//     background-color: ${(props) =>
//       props.inavlid ? "rgb(253, 174, 174)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
const CourseInput = (props) => {
  const [validation, setValidation] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setValidation(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidation(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!validation && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
