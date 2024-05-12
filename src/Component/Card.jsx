import React from 'react';
import D_Off from '../Styles/Images/D_Off.png';
import R_D from '../Styles/Images/R_D.png';
import S_H from '../Styles/Images/S_H.png';
import A from '../Styles/Images/A.png';
import R from '../Styles/Images/R.png';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (

<MDBRow  className='row-cols-1 row-cols-md-5 g-5'>
    <MDBCard>
      <MDBCardImage style={{height: '150px', width: '150px',alignItems:'center'}} src={D_Off} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{fontSize:'13px',color:'#007ab7',fontWeight:'bold' , textDecoration: 'underline' }}>Drop off a package</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>

    <MDBCard>
      <MDBCardImage  style={{height: '150px', width: '150px',alignItems:'center'}} src={R_D} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{fontSize:'13px',color:'#007ab7',fontWeight:'bold', textDecoration: 'underline' }}>Redirect a package</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardImage  style={{height: '150px', width: '150px',alignItems:'center'}}  src={S_H} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{fontSize:'13px',color:'#007ab7',fontWeight:'bold' , textDecoration: 'underline' }}>Store hours and services</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardImage  style={{height: '150px', width: '150px',alignItems:'center'}}  src={A} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{fontSize:'13px',color:'#007ab7',fontWeight:'bold' , textDecoration: 'underline' }}>Service alerts</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardImage  style={{height: '150px', width: '150px',alignItems:'center'}} src={R} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle  style={{fontSize:'13px',color:'#007ab7',fontWeight:'bold' , textDecoration: 'underline' }}>Return a package</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>   
</MDBRow>   
  );
}