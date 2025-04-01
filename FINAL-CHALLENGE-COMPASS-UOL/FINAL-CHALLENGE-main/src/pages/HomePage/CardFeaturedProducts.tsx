import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import Loading from '../Loading/Loading';

import './featuresProducts.css';
import headphone from './images/headphone.svg';
import arrow from './images/arrow-right.svg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Product {
  id: number;
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: Review[];
}

interface Review {
  user: string;
  description: string;
  rating: number;
  date: string;
}

export default function CardFeatureProducts () {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    void fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await api.get('/a93df7f1-711b-46ab-96dc-61f4865ddcc9');
      setProducts(response.data as Product[]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="featurePage">
      <section className="filterSection">
        <Splide 
          options={{
            type: 'slide',
            perPage: 1,
            perMove: 1,
            autoplay: false,
            pagination: false,
            arrows: false,              
          }}
        >
          <SplideSlide>
            <div className="navigatorBar">
              <button 
                className={`filterButton ${
                  selectedCategory === 'Headphones' ? 'btnSelected' : ''
                }`}
                onClick={() => handleCategoryClick("Headphones")}
              >Headphone</button>
              <button
                className={`filterButton ${
                  selectedCategory === 'Headsets' ? 'btnSelected' : ''
                }`}
                onClick={() => handleCategoryClick('Headsets')}
              >Headset</button>
              <button 
                  className={`filterButton ${
                  selectedCategory === "Headband" ? "btnSelected" : " "
                }`}
                onClick={() => handleCategoryClick("Headband")}
              >Headband</button>
              <button 
                className={`filterButton ${
                  selectedCategory === "Earpads" ? "btnSelected" : " "
                }`}
                onClick={() => handleCategoryClick("Earpads")}
              >Earpads</button>
              <button 
                className={`filterButton ${
                  selectedCategory === "Cable" ? "btnSelected" : " "
                }`}
                onClick={() => handleCategoryClick("Cable")}
              >Cable</button>
            </div>
          </SplideSlide>
        </Splide>
        {loading ? (<Loading />) : (
          <Splide
              options={{
                type: 'slide',
                perPage: 1,
                perMove: 1,
                autoplay: false,
                pagination: false,
                arrows: false,              
              }}
              >
                {products
                  .filter((product) =>
                  !selectedCategory || product.category === selectedCategory)
                .map((product) => (
                  <SplideSlide key={product.id}>
                    <div className="containerBlock">
                      <div className="productBox">
                        <p className="productName">{product.name}</p>
                        <Link to={`/detailPage/${product.id}`} className="shopArrow">
                          <p className="shopNow">Shop now</p>
                          <img src={arrow} alt="Arrow" />
                        </Link>
                      </div>
                      <img className="productImg" id="filterImage" src={headphone} alt="Product Image" />
                    </div>
                  </SplideSlide>
                ))}           
          </Splide>
        )}
      </section>
    </div>
  );
}
