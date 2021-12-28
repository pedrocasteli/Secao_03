import Expenses from "./Components/Expenses";

function App() {
    const expenses = [
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

    return (
        <div>
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
