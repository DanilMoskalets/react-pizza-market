import React from 'react';
import Categories from "./Categories";
import Sort from "./Sort";
import Header from "./Header";
import PizzaBlock from "./Pizza-block/PizzaBlock";

const MainLayout = () => {
    return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <PizzaBlock/>
                    </div>
                </div>
            </div>
    );
};

export default MainLayout;