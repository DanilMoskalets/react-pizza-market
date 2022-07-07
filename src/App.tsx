import React from 'react';
import './scss/app.scss'

import {Routes, Route} from 'react-router-dom';
import MainLayout from "./Components/MainLayout";
import Cart from "./Components/Cart";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element= {<MainLayout/>} />
            <Route path = {'/cart.html'} element={<Cart/>} />
        </Routes>

    )
        ;
}

export default App;
