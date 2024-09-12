import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const NavBar = ({alt,img,btn}) => {
  const navItems = [
    
    {
        item:"HOME",
        href:"#home"
    },
    {
        item:"ABOUT",
        href:"#about"
    },
    {
        item:"SERVICES",
        href:"#services"
    },
    {
        item:"DEPARTMENTS",
        href:"#departments"
    },
    {
        item:"DOCTORS",
        href:"#doctors"
    },
  ]



  return (
    <>
    

    <Navbar expand="lg" className="bg-body-tertiary  w-sm-0 ">
      <Container fluid  className='d-flex justify-content-evenly align-items-center flex-nowrap p-0 m-1' >
      <Navbar.Brand className='mx-1 ' >
            <img
              alt={alt}
              src={img}
              max-width="130"
              min-width="100"
              height="35"
              className="d-inline-block align-top "
            />{''}
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  />

        <Navbar.Collapse className='flex-grow-0   ' id="basic-navbar-nav">
          <Nav className="me-auto">
            {
                navItems?.map((e,i)=>{
                    return(
                      <Nav.Link className='mx-2 text-black ' key={i} href={e.href}>{e.item}</Nav.Link>   
                    )
                })
            }
            
            <NavDropdown className='mx-2' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider  />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='mx-2 text-black' href='#contact'>CONTACT</Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
        <Button className='btn-nav px-sm-4 py-sm-2 p-1 fs-6 mx-1  border-0 ' >{btn}</Button>{' '}
      </Container>
      
    </Navbar>
  
    </>
  )
}

export default NavBar
