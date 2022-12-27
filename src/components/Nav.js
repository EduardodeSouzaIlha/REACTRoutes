import React from 'react'
import SearchForm from './SearchForm.js';

import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>

        <ul id="ul-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <SearchForm/>
            <li><NavLink to="/settings">SET</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav