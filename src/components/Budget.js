import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, old_value  } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const { expenses  } = useContext(AppContext);
    const { currency }  = useContext(AppContext);

    const onChangeBudget = (value) => {
        if(value <= 0) {
            alert("The value cannot be less than 0");
            dispatch({
                type: 'SET_BUDGET',
                payload: old_value,
            });
            return;
        }
        
        if(value > 20000) {
            alert("The value cannot exceed 20000");
            dispatch({
                type: 'SET_BUDGET',
                payload: old_value,
            });
            return;
        }
        if(value < expenses) {
            alert("The budget cannot exceed expenses");
            dispatch({
                type: 'SET_BUDGET',
                payload: old_value,
            });
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        
    };


    return (
        <div className='alert alert-secondary'>
            <label>Budget {currency}</label>
            <input
                   required='required'
                   type='number'
                        id='budget'
                        value={budget}
                        style={{ width: 100, marginLeft: '2rem' , size: 10}}
                        onChange={(event) => onChangeBudget(event.target.value)}
                        step='10'>
                        </input>
        </div>
    );
};
export default Budget;
