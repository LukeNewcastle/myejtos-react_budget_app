import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);

    const onChangeCurrency = (currencyValue) => {    
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyValue,
        });
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelectC01">Currency</label>
                </div>
                <select className="custom-select" id="inputGroupSelectC02" onChange={(event) => onChangeCurrency(event.target.value)}>
                    <option defaultValue="£" name="Pound">(£ Pound)</option>
                    <option value="$" name="Dollar">($ Dollar)</option>
                    <option value="€" name="Euro">(€ Euro)</option>
                    <option value="₹" name="Ruppee">(₹ Ruppee)</option>
                </select>

            </div>
            </div>

        </div>
    );
};

export default Currency;
