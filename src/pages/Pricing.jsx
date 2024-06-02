import React from 'react'

import NavBar from '../components/NavBar.jsx'
import Footer from '../components/footer.jsx'
import PricingGrid from '../components/PricingGrid.jsx'



export default function Register() {
  return (
    <header>
    <NavBar isCartVisible={false}/>
    <br></br>
    <PricingGrid/>
    <br></br><br></br>
    <Footer/>
 </header>
  )
}