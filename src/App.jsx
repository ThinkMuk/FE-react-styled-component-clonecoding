import React from 'react';
import Jumbotron from './pages/Jumbotron';
import Navbar from './components/Navbar';
import BodyContainer from './pages/BodyContainer';
import Footer from './pages/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <BodyContainer />
      <Footer />
    </>
  );
}
