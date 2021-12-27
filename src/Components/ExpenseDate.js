import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const mes = props.date_prop_2.toLocaleString("pt-br", { month: "long" });
    const dia = props.date_prop_2.toLocaleString("pt-br", { day: "2-digit" });
    const ano = props.date_prop_2.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{dia} de</div>
            <div className="expense-date__month">{mes} de</div>
            <div className="expense-date__year">{ano}</div>
        </div>
    );
};

export default ExpenseDate;
