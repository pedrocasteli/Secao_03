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
        </div>
    );
};

export default Expenses;
