import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBAnimation } from 'mdbreact';

const FeaturePage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeInUp">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c2c8d369020497.5b71f218dd54e.gif"
              alt="Animated Banner"
              className="img-fluid"
              style={{ width: '300px', height: '200px' }}
            />
          </MDBAnimation>
          <MDBCard>
            <MDBCardBody>
              <h2 className="text-center mb-4">Our Features</h2>
              <MDBRow>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBAnimation type="flipInX">
                        <h4 className="text-center">Global Reach</h4>
                        <p>FedEx offers worldwide shipping services, allowing businesses and individuals to send packages and documents to almost any corner of the globe. With a vast network of international partners and carriers, FedEx ensures reliable delivery to over 220 countries and territories.</p>
                      </MDBAnimation>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBAnimation type="flipInX" delay=".1s">
                        <h4 className="text-center">Time-Definite Delivery</h4>
                        <p>FedEx provides time-definite delivery options, such as FedEx Express, which guarantees delivery by a specific time. This feature is crucial for businesses and individuals who require urgent or time-sensitive deliveries, ensuring that packages arrive when needed.</p>
                      </MDBAnimation>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBAnimation type="flipInX" delay=".2s">
                        <h4 className="text-center">Advanced Tracking</h4>
                        <p> FedEx offers advanced tracking capabilities, allowing customers to monitor their shipments in real-time. With features like FedEx Insight and FedEx Delivery Manager, recipients can track their packages, receive notifications, and even customize delivery options to fit their schedule.</p>
                      </MDBAnimation>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FeaturePage;
