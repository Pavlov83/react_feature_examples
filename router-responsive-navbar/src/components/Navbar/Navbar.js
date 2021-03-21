import React from 'react';
import{ MenuList }  from './MenuList';
import{ NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{

    const menulist = MenuList.map(({url,title}, index) =>{
        return(
            <li key={index}>
            <NavLink exact to={url} activeClassName='active'>{title}</NavLink>
            </li>
        )
    })

    return(
        <nav>
            <div className="logo">
                 Resolver Software 
            </div>  
            <div className='menu-icon'>
                <i className="fa fa-bars"></i>
            </div>
            <ul className='menu-list'>{menulist}</ul>   
        </nav>
    )

}

export default Navbar;