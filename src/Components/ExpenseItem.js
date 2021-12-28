import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 4, 28);
    const expenseTitle = "Luke Skywalker";

    return (
        <div className="expense-item">
            <ExpenseDate date_prop_2={props.date_prop} />
            <div className="expense-item__description">
                <h2>{props.title_prop}</h2>
                <div className="expense-item__price">R${props.amount_prop}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
