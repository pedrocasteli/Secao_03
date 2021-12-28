import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const funcao_04 = (event) => {
        props.prop_result_funcao_04(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.prop_ano_selecionado} onChange={funcao_04}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
