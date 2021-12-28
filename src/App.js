import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Luke Skywalker",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "Darth Vader",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Leia Organa",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "Han Solo",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const funcao_03 = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div>
            <NewExpense prop_result_funcao_02={funcao_03} />
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
