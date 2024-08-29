import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/phones'>Phone</NavLink>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;