import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [ano, setAno] = useState("2021");

    const funcao_05 = (anoSelecionado) => {
        setAno(anoSelecionado);
    };

    return (
        <div>
            <Card classe="expenses">
                <ExpensesFilter
                    prop_ano_selecionado={ano}
                    prop_result_funcao_04={funcao_05}
                />
                {props.item.map((expense) => (
                    <ExpenseItem
                        title_prop={expense.title}
                        amount_prop={expense.amount}
                        date_prop={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
