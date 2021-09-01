import React from 'react';

const Number = React.memo(({ name, change, valueInput }) => {

    return (
        <>
            <input
                className="inputs-block__item"
                type="number"
                min="1"
                name={ name }
                value={ valueInput }
                onChange={ change }
            />
        </>
    );
});

export default Number;