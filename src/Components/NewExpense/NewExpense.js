import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const funcao_02 = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.prop_result_funcao_02(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm prop_result_funcao_01={funcao_02} />
        </div>
    );
};

export default NewExpense;
