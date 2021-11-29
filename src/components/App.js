import React, { useState } from 'react';
import FooterView from './FooterView';
import HeaderView from './HeaderView';
import MainView from './MainView';

const App = () => {

    return (
        <div className='container' >
            <div className='component'>
                App
                <HeaderView />
                <MainView />
                <FooterView />
            </div>
        </div>
    );
};

export default App;
