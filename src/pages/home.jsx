import React from 'react'

import NavBar from '../components/NavBar.jsx'
import Bannser from '../components/Bannser.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/footer.jsx'


export default function home() {
  return (
    <header>
    <NavBar isCartVisible={false}/>
    <Bannser/>
    <br></br><br></br><br></br>
    <Card/>
    <Footer/>
 </header>
  )
}



