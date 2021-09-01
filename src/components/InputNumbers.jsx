import React from 'react';

import { Number } from '../components';

const InputNumbers = React.memo(({ inputValueObj, handleChange }) => {

    return (
        <section className="inputs-block">
            <div className="inputs-block__items">
                <Number 
                    change={ handleChange } 
                    valueInput={ inputValueObj.firstValueInput } 
                    name='firstValueInput'
                />
                <Number 
                    change={ handleChange } 
                    valueInput={ inputValueObj.secondValueInput } 
                    name='secondValueInput'
                />
            </div>
        </section>
    );
});

export default InputNumbers;