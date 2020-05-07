import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';

import styled from 'styled-components';



const Styles = styled.div`
.navbar{
     background-color: white;
     width:100%;
}
.nav {
    width:100%;
}
.nav-link{
    // font-size: 15px;
}

`;

export const NavigationBar =()=>(
<Styles>
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <Navbar fixed="bottom" >   
        {/* <Navbar.Brand href="/">HelloWorld</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls = "basic-navbar-nav"/> 
         <Navbar.Collapse id="basic-navbar-nav">  */}
            <Nav className="nav  nav-justified">
                {/* <Nav.Item><Nav.Link href="/"><i class="fa fa-map-marker"></i> Home</Nav.Link></Nav.Item> */}
                <Nav.Item><Nav.Link style={{color:'black'}}    href="/"><i className="fa fa-location-arrow"><br/>Parks</i></Nav.Link></Nav.Item>

                <Nav.Item ><Nav.Link  style={{color:'black'}}   href="/community">
                    <i className="fa fa-users fa-1x text-center"><br/> Community</i>
                </Nav.Link></Nav.Item>

                <Nav.Item ><Nav.Link style={{color:'black'}}   href="/events"> <i className="fa fa-calendar"><br/>Events</i></Nav.Link></Nav.Item>

                <Nav.Item><Nav.Link  style={{color:'black'}}   href="/profile">
                    <i className="fa fa-user fa-1x text-center"><br/>Profile</i>
                    {/* style={{background:'black',color:'white'}} */}
                </Nav.Link></Nav.Item>

                 <Nav.Item ><Nav.Link style={{color:'black'}}   href="/chat">
                     <i className="fa fa-comments"><br/>Chat</i>
                </Nav.Link></Nav.Item> 

                </Nav>


        {/* </Navbar.Collapse>  */}
        </Navbar>
    </Styles>
);