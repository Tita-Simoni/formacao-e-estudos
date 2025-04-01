import './explorePage.css';
import chevron from '../Search/images/chevron-left.svg';
import shoppingCart from '../Search/images/shopping-cart.svg';
import slider from './images/sliders.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css'
import CardExploreProducts from './CardExploreProducts';
import Filter from './Filter';

export default function ExplorePage () {  
  const [open, setOpen] = useState(false);
  
  const handleSheetClose = () => {
    setOpen(false);
  };

  return (
    <div className="explore">
        <section className="menu">
            <Link to="/home">
              <img src={chevron} alt="Chevron Icon" />
            </Link>
            <Link to="/cartPage">
              <img id="avatar" src={shoppingCart} alt="Avatar" />
            </Link>
        </section>
        <section className="upper">
            <p>Headphone</p>
            <h2>TMA Wireless</h2>
        </section>
        <div className="filter">
          <img src={slider} alt=" "/>
          <button         
            className="filterBtn"
            onClick={() => setOpen(true)}
          >Filter</button>
          <BottomSheet 
            open={open} 
            onDismiss={handleSheetClose} 
          ><Filter />
          </BottomSheet>
        </div>
        <CardExploreProducts />
    </div>
  );
}
