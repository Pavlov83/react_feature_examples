import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = () =>{
    return(

  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ResolverSoft</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     
  
     
     
      
   
      <Link>Link</Link>
    
    
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  
    )

}

export default NavBar;