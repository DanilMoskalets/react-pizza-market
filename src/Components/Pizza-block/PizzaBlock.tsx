import React from 'react';
import pizzas from '../../assets/pizzas.json'
import FullPizza from "./FullPizza";

const PizzaBlock = () => {



    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.map(obj => {
                        return (
                           <FullPizza {...obj}/>
                        )
                    })
                }

            </div>
        </>
    );
};

export default PizzaBlock;