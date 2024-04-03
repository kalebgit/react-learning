import "./ExpenseItem.scss";

function ExpenseItem({ title, date, amount, children }) {
  return (
    <div className="main">
      <div className="main__title">{title}</div>
      <div>
        {children}
        <h2>{date.toISOString()}</h2>
        <div>{amount}</div>
      </div>
    </div>
    
  );
}

export default ExpenseItem;
