import React from 'react';

import { Number } from '../components';

const InputNumbers = React.memo(({ change, value }) => {

    return (
        <section className="inputs-block">
            <div className="inputs-block__items">
                <Number change={ change } valueInput={ value.firstValueInput } name='firstValueInput' />
                <Number change={ change } valueInput={ value.secondValueInput } name='secondValueInput' />
            </div>
        </section>
    );
});

export default InputNumbers;