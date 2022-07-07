import React from 'react';
import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import FullPizza from "./Components/FullPizza";

const App = () => {
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
}

export default App;
