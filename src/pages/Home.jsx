import React from 'react';

import { ResultArray, InputNumbers, Button } from '../components';

const Home = () => {
    const [resultOfNumbers, setIsResultOfNumbers] = React.useState([]);
    const [sumOfTwo, setIsSumOfTwo] = React.useState(0);
    const [inputValueObj, setInputValues] = React.useState({ firstValueInput: 1, secondValueInput: 1 });

    const handleChange = (event) => {
        setInputValues({ ...inputValueObj, [event.target.name]: +event.target.value })
    };

    const getArray = (arr) => {
        setIsResultOfNumbers(arr);
    };

    const getSum = React.useCallback((obj) => {
        let result = Object.values(obj).reduce((res, el) => res += el, 0);
        setIsSumOfTwo(result);
    }, []);

    React.useEffect(() => {
        getSum(inputValueObj);
    }, [getSum, inputValueObj]);

    return (
        <div className="content">
            <div className="container">
                <ResultArray
                    result={ resultOfNumbers }
                />
                <InputNumbers
                    handleChange={ handleChange }
                    inputValueObj={ inputValueObj }
                />
                <Button
                    setArray={ getArray }
                    arrayResult={ resultOfNumbers }
                    allSum={ sumOfTwo }
                />
            </div>
        </div>
    );
};

export default Home;