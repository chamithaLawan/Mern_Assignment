import React from 'react';
import NavBar from '../components/NavBar.jsx';
import CardAbout from '../components/Card_about.jsx';
import Footer from '../components/footer.jsx';

export default function About() {
  return (
    <div className="about-page">
      <header>
        <NavBar isCartVisible={false}/>
      </header>
      <main>
        <br></br>
        <CardAbout/>
      </main>
      <footer className="fixed-footer">
        <Footer/>
      </footer>
    </div>
  );
}