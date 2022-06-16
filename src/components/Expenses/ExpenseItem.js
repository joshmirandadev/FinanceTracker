import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
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
