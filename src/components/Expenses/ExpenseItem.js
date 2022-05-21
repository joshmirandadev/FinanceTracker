import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  console.log("ExpenseItem evaluated by react");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

//hooks can only be called at the very top of main function
//we get all data from outside this component using props and newly created attributes

//within the jsx we replace hard coded html into an expression with {}
//the {} expression will extract from the value it is calling from, iin that case expenseTitle
//toISOString is a function to stringify into text
// dynamic placeholders
// a component is just a function, which is a combo of html and javascript
//can only return one root element, basically just one div

export default ExpenseItem;
