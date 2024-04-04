import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About'
import Main from './components/Main/Main'
import NoPage from './components/NoPage/NoPage';
import Layout from './components/Layout/Layout';
import Basket from './components/Basket/Basket';
import Menu from './components/Menu/Menu';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="about" element={<About />} />
                    <Route path="basket" element={<Basket />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="*" element={<NoPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;