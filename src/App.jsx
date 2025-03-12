import React from 'react';
import "./styles/reset.css"
import "./styles/common.css"
import Header from "./components/head/Header.jsx";
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";
import GeneratorPage from "./pages/GeneratorPage.jsx";


const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<GeneratorPage/>} />
            </Routes>
        </>
    );
};

export default App;