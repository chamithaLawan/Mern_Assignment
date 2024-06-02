import React from 'react'

import NavBar from '../components/NavBar.jsx'
import Footer from '../components/footer.jsx'
import FeaturePage from '../components/FeaturePage.jsx'

export default function Features() {
  return (
    <header>
    <NavBar isCartVisible={false}/>
    <br></br>
     <FeaturePage/>
    <Footer/>
 </header>
  )
}