
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const currentAssignedBudget = event.target.value
        setNewBudget(currentAssignedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: currentAssignedBudget
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span style={{marginRight: "20px"}}>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;