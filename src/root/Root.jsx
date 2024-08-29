import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';

const Root = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;