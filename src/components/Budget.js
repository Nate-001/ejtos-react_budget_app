import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';



const Budget = () => {
    const { remaining, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        const upperLimit = 20000;
        const inputBudget = event.target.value;
        if (inputBudget > upperLimit){
            alert("The value cannot ecceed remaining funds "+ remaining)
        }else if(inputBudget < remaining){
            alert("You cannot reduce the budget value lower than the spending")
        }else{
        setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
