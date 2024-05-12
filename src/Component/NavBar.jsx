import React, { useState } from 'react';
import Image2 from '../Styles/Images/logo.png';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' style={{ backgroundColor: '#4d148c' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={Image2} width="90px" height="28px" alt="logo"/></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#' style={{ color: 'white' }}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white' }}>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white'}}>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white' }}>About</MDBNavbarLink>
            </MDBNavbarItem>     
            <MDBNavbarItem>
              <MDBNavbarLink href='#' style={{ color: 'white' }}>Register</MDBNavbarLink>
            </MDBNavbarItem>                            
          </MDBNavbarNav>                
        </MDBCollapse>

        <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon" style={{ color: 'white' }}>
        <i class="fas fa-search"></i>
      </span>
    </form>    
      </MDBContainer>
    </MDBNavbar>

  );
}