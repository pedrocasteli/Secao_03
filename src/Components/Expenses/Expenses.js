import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card classe="expenses">
            <ExpenseItem
                title_prop={props.item[0].title}
                amount_prop={props.item[0].amount}
                date_prop={props.item[0].date}
            />
            <ExpenseItem
                title_prop={props.item[1].title}
                amount_prop={props.item[1].amount}
                date_prop={props.item[1].date}
            />
            <ExpenseItem
                title_prop={props.item[2].title}
                amount_prop={props.item[2].amount}
                date_prop={props.item[2].date}
            />
            <ExpenseItem
                title_prop={props.item[3].title}
                amount_prop={props.item[3].amount}
                date_prop={props.item[3].date}
            />
        </Card>
    );
};

export default Expenses;
