import React from 'react';

const Button = ({ calcSum, addToArray }) => {

    const onSubmitHandler = () => {
        calcSum();
        addToArray();
    };

    return (
        <section>
            <button type="button" onClick={ onSubmitHandler }>Выполнить </button>
        </section>
    );
};

export default Button;
