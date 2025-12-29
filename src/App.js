import React from 'react';
import {Brand, Cta, NavBar} from './components';
import { Header, Footer, Blog, Possibility, Features, WhatGPT } from './containers';
import './App.css';

const App = () => {
    return (
        <div className="Gradient_BG">
            <div className="App">
                <div >
                    <NavBar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT />
                <Features />
                <Possibility />
                <Cta />
                <Blog />
                <Footer />

            </div>
        </div>
    )
}

export default App;