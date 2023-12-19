import React from 'react';
import Hero from '../componen/hero';
import NavbarLanding from '../componen/navbar';
import Footer from '../componen/footer';

function home() {
return (
    <div>
    <NavbarLanding />
    <Hero />
    <Footer/>
    </div>
);
}

export default home;
