import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title_prop);

    const clickHander = () => {
        setTitle("Updated!");
        alert(title);
    };

    return (
        <Card classe="expense-item">
            <ExpenseDate date_prop_2={props.date_prop} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    R$ {props.amount_prop}
                </div>
            </div>
            <button onClick={clickHander}>Change title</button>
        </Card>
    );
};

export default ExpenseItem;
