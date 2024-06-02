import React from 'react'

import NavBar from '../components/NavBar.jsx'
import RegistrationPage from '../components/CourierRegistrationPage.jsx'
import Footer from '../components/footer.jsx'



export default function Register() {
  return (
    <header>
    <NavBar isCartVisible={false}/>
    <br></br>
    <RegistrationPage />
    <Footer/>
 </header>
  )
}