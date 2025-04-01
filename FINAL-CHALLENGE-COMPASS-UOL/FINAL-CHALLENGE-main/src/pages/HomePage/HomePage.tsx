// import * as React from 'react';
import './home.css';
import menu from './images/menu-variant.svg';
import logoAudio from './images/LogoAudio.svg';
import avatar from './images/Avatar.svg';
import search from './images/search.svg';
import CardFeatureProducts from './CardFeaturedProducts';
import CardProducts from './CardProducts';
import { Link } from 'react-router-dom';

export default function HomePage () {
  return (
    <div className="homePage">
      <section className="menu">
        <img id="menu" src={menu} alt="Menu Icon" />
        <img id="audio" src={logoAudio} alt="logo AUdio" />
        <img id="avatar" src={avatar} alt="Avatar" />
      </section>
      <section className="welcome">
        <p id="welcome">Hi, Tita</p>
        <h2>What are you looking for today?</h2>
      </section>
      <Link to="/searchPage" className="searchBox">
        <img id="search" src={search} alt="Search Icon" />     
        <p className="searchLink">Search headphone</p>                   
      </Link>
      <CardFeatureProducts />      
      <CardProducts />
    </div>
  );
}
