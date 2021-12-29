import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [ano, setAno] = useState("2021");

    const funcao_05 = (anoSelecionado) => {
        setAno(anoSelecionado);
    };

    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === ano;
    });

    return (
        <div>
            <Card classe="expenses">
                <ExpensesFilter
                    prop_ano_selecionado={ano}
                    prop_result_funcao_04={funcao_05}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList item={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
