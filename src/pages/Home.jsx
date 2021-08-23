import React from 'react';

import { ResultArray, InputNumbers, Button } from '../components';

const Home = () => {
    const [resultOfNumbers, setIsResultOfNumbers] = React.useState([]);
    const [sumOfTwo, setIsSumOfTwo] = React.useState(null);
    const [inputValueObj, setInputValue] = React.useState({ firstValueInput: 1, secondValueInput: 1 });

    const handleChange = (event) => {
        setInputValue({ ...inputValueObj, [event.target.name]: +event.target.value })
    };

    const getArray = () => {
        const copyArray = resultOfNumbers;
        copyArray.push(sumOfTwo);
        setIsResultOfNumbers(copyArray);
    };

    const getSum = () => {
        const copyObjInput = inputValueObj;
        let sum = Object.values(copyObjInput).reduce((res, el) => res += el, 0);
        setIsSumOfTwo(sum);
    };

    return (
        <div className="content">
            <div className="container">
                <ResultArray result={ resultOfNumbers } />
                <InputNumbers change={ handleChange } value={ inputValueObj } />
                <Button calcSum={ getSum } addToArray={ getArray } />
            </div>
        </div>
    );
};

export default Home;