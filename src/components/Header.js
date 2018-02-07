import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="is-active" exact>
        Home
      </NavLink>
      <NavLink to="/test" activeClassName="is-active">
        Test
      </NavLink>
    </div>
  );
};

export default Header;
