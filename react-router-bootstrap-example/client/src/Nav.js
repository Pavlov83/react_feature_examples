import React from 'react';

import {Link} from 'react-router-dom';

const Nav = () =>{

    const navStyle = {
        color: 'white'
    }
     return(
         <nav>
             <ul className='nav-links'>
                 <Link style ={navStyle} to='/'>
                <li>Home</li>
                 </Link>
                 <Link style ={navStyle} to='/submit'>
                 <li>Submit</li>
                 </Link >
                 <Link style ={navStyle} to='/tutorial'>
                 <li>Tutorials</li>
                 </Link>
             </ul>
         </nav>
     )

 }

 export default Nav;