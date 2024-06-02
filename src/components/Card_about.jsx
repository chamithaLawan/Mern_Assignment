import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBCardTitle
} from 'mdb-react-ui-kit';
import '../styles/css/card-custom.css'
import C1 from '../styles/Images/C1.jpg';
import C2 from '../styles/Images/C2.jpg';
import C3 from '../styles/Images/C3.jpg';
import '../styles/css/card-animation.css';

export default function Card_about() {
  return (
    <MDBContainer className="d-flex justify-content-start">
      <MDBCard className="card-custom" style={{ width: '300px', height: '450px' }}>
        <MDBCardImage src={C1} alt='...' position='top' style={{ height: '200px' }} />
        <MDBCardBody>
        <MDBCardTitle>Ship to customers with fewer clicks</MDBCardTitle>
          <MDBCardText>
          Streamline shipping with the updated FedEx Ship Manager®. Choose the comfortable view to get more guidance, or the compact view to see everything on one screen.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="card-custom" style={{ width: '300px', height: '450px' }}>
        <MDBCardImage src={C2} alt='...' position='top' style={{ height: '200px' }} />
        <MDBCardBody>
        <MDBCardTitle>Develop a frictionless returns strategy</MDBCardTitle>
          <MDBCardText>
          Learn how to offer no-label, no-box returns to your customers. Find out more about simplified pricing options, get tips to keep customers coming back, and more.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>   

      <MDBCard className="card-custom" style={{ width: '300px', height: '450px' }}>
        <MDBCardImage src={C3} alt='...' position='top' style={{ height: '200px' }} />
        <MDBCardBody>
        <MDBCardTitle>Test your packaging before it travels</MDBCardTitle>
          <MDBCardText>
          Take steps to protect your products with package testing at the FedEx Packaging Lab. It’s free if you have a FedEx account. Our pros can also recommend sustainable packaging.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>          
    </MDBContainer>
    
  );
}