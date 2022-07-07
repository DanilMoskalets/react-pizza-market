import React from 'react';
import Categories from "./Categories";
import Sort from "./Sort";
import Header from "./Header";
import FullPizza from "./FullPizza";

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
                        <FullPizza/>
                    </div>
                </div>
            </div>
    );
};

export default MainLayout;