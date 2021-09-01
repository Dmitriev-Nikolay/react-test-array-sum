import React from 'react';

const ResultArray = React.memo(({ result }) => {

    return (
        <section className="array-block">
            {
                result.length === 0 ?
                    <p className="array-block__start">Начинай</p>
                    :
                    <div className="array-block__result">
                        { 
                            result.map((num, i) => {
                                return (
                                    <p key={ `${ num }_${ i }` }>{ num }</p>
                                )
                            })
                        }
                    </div>
            }
        </section>
    );
});

export default ResultArray;
