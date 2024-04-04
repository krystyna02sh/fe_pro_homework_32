// src/components/Header/Header.js
import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>

        </div>
    );
}

export default Layout;