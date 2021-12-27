import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>28 de maio de 2021</div>
            <div className="expense-item__description">
                <h2>Luke Skywalker</h2>
                <div className="expense-item__price">R$1000,00</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
