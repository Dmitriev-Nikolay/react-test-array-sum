import React from 'react';

const Button = React.memo(({ setArray, arrayResult, allSum }) => {

    const updateArray = () => {
        setArray([...arrayResult, allSum]);
    };

    return (
        <>
            <button type="button" onClick={ updateArray }>Выполнить</button>
        </>
    );
});

export default Button;
