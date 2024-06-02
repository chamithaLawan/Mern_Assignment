import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import '../styles/css/courier-registration.css';

export default function CourierRegistrationPage() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.rePassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      // Handle form submission
      console.log('Form submitted', formValues);
    }
  };

  return (
    <MDBContainer fluid className='p-4'>
      <MDBRow className='justify-content-center'>
        <MDBCol md='6'>
          <MDBCard>
            <MDBCardBody className='p-5'>
              <h2 className='text-center mb-4'>Courier Registration</h2>
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      label='First Name'
                      id='firstName'
                      type='text'
                      name='firstName'
                      value={formValues.firstName}
                      onChange={handleChange}
                      required
                      className='mb-4'
                    />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      label='Last Name'
                      id='lastName'
                      type='text'
                      name='lastName'
                      value={formValues.lastName}
                      onChange={handleChange}
                      required
                      className='mb-4'
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  label='Email'
                  id='email'
                  type='email'
                  name='email'
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className='mb-4'
                />
                <MDBInput
                  label='Password'
                  id='password'
                  type='password'
                  name='password'
                  value={formValues.password}
                  onChange={handleChange}
                  required
                  className='mb-4'
                />
                <MDBInput
                  label='Re-Enter Password'
                  id='rePassword'
                  type='password'
                  name='rePassword'
                  value={formValues.rePassword}
                  onChange={handleChange}
                  required
                  className='mb-4'
                />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <MDBInput
                  label='Phone Number'
                  id='phoneNumber'
                  type='text'
                  name='phoneNumber'
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  required
                  className='mb-4'
                />
                <MDBInput
                  label='Address'
                  id='address'
                  type='text'
                  name='address'
                  value={formValues.address}
                  onChange={handleChange}
                  required
                  className='mb-4'
                />
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      label='City'
                      id='city'
                      type='text'
                      name='city'
                      value={formValues.city}
                      onChange={handleChange}
                      required
                      className='mb-4'
                    />
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      label='Postal Code'
                      id='postalCode'
                      type='text'
                      name='postalCode'
                      value={formValues.postalCode}
                      onChange={handleChange}
                      required
                      className='mb-4'
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn type='submit' className='w-100 mb-4' style={{ backgroundColor: 'rgb(79, 22, 143)', borderColor: 'rgb(79, 22, 143)', color: 'white' }}>
                  Register
                </MDBBtn>
              </form>
              <div className='text-center'>
                <p>or sign up with:</p>
                <MDBBtn tag='a' color='none' className='mx-1'>
                  <MDBIcon fab icon='facebook-f' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-1'>
                  <MDBIcon fab icon='google' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-1'>
                  <MDBIcon fab icon='twitter' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-1'>
                  <MDBIcon fab icon='github' size='lg' />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
