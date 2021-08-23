import React from 'react';

const Number = React.memo(({ change, valueInput, name }) => {
    
    return (
        <section className="inputs-block__item">
            <input
                type="number"
                min="1"
                name={ name }
                value={ valueInput }
                onChange={ change }
            />
        </section>
    );
});

export default Number;