import React from 'react';
import D_Off from '../styles/Images/D_Off.png';
import R_D from '../styles/Images/R_D.png';
import S_H from '../styles/Images/S_H.png';
import A from '../styles/Images/A.png';
import R from '../styles/Images/R.png';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <MDBRow className='row-cols-1 row-cols-md-5 g-6' >
        <MDBCard className='text-center fade-in-down' style={{ width: '200px', margin: '0 auto 20px auto' }} >
          <MDBCardImage src={D_Off} position='top' alt='Drop off a package' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '13px', color: 'rgb(77, 20, 140)', fontWeight: 'bold', textDecoration: 'underline' }}>Drop off a package</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-center' style={{ width: '200px', margin: '0 auto 20px auto' }}>
          <MDBCardImage src={R_D} position='top' alt='Redirect a package' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '13px', color: 'rgb(77, 20, 140)', fontWeight: 'bold', textDecoration: 'underline' }}>Redirect a package</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-center' style={{ width: '200px', margin: '0 auto 20px auto' }}>
          <MDBCardImage src={S_H} position='top' alt='Store hours and services' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '13px', color: 'rgb(77, 20, 140)', fontWeight: 'bold', textDecoration: 'underline' }}>Store hours and services</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-center' style={{ width: '200px', margin: '0 auto 20px auto' }}>
          <MDBCardImage src={A} position='top' alt='Service alerts' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '13px', color: 'rgb(77, 20, 140)', fontWeight: 'bold', textDecoration: 'underline' }}>Service alerts</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-center' style={{ width: '200px', margin: '0 auto 20px auto' }}>
          <MDBCardImage src={R} position='top' alt='Return a package' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '13px', color: 'rgb(77, 20, 140)', fontWeight: 'bold', textDecoration: 'underline' }}>Return a package</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </div>
  );
}
