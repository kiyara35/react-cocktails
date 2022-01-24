import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Home"
import Detail from "./Detail"
import Ingredient from "./Ingredient"
import Header from "../component/Header"

const Main = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='detail/:id' element={<Detail/>}/>
                <Route  path='ingredient/:name' element={<Ingredient/>}/>

            </Routes>

        </div>
    );
};

export default Main;