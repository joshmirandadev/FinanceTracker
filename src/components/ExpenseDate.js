import "./ExpenseDate.css";

function ExpenseDate(props) {
  //keep your most intense logic outside of the return
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
