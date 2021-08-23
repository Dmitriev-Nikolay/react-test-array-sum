import React from 'react';

const ResultArray = React.memo(({ result }) => {

    return (
        <section className="array-block">
            {
                result.length === 0 ?
                    <p>Начинай</p>
                    :
                    <div className="array-block__result">
                        {/* { 
                            result.map((num, i) => {
                                return (
                                    <p key={ `${ num }_${ i }` }>{ num },</p>
                                )
                            })
                        } */}
                        { 
                            result
                        }
                    </div>
            }
        </section>
    );
});

export default ResultArray;
