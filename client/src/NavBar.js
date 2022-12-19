import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  
  return (
    
      <div className='sidenav'>

        <NavLink to= '/'>
          <h4>Home</h4>
        </NavLink>

        <NavLink to= '/stores'>
          <h4>Stores</h4>
        </NavLink>
      
      </div>
    );
}

export default NavBar
