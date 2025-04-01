import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import Loading from '../Loading/Loading';

import './featuresProducts.css';
import headphone from './images/headphone.svg';

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

export default function CardProducts () {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="featurePage-2">      
      <section className="featureSection">
          <div className="containerFeatures">
              <p className="featureTitle">Another Products</p>
              <Link to="/explorePage">
                <p className="featureSubTitle">See All</p>
              </Link>
          </div>
          {loading ? (<Loading />) : (
            <Splide
              options={{
                type: 'slide',
                perPage: 2,
                perMove: 1,
                autoplay: false,
                pagination: false,
                arrows: false,             
              }}
              >
                {products.map((product) => (
                  <SplideSlide key={product.id}>
                    <div className="containerProducts">
                      <Link to={`/detailPage/${product.id}`}>
                          <img className="productImg-2" src={headphone} alt="Product Image" />
                          <div className="productFeatures">
                              <p className="productName-2">{product.name}</p>
                              <p className="productExtra">{product.price}</p>
                          </div>
                      </Link>  
                    </div>
                  </SplideSlide>                 
                ))}                                                        
              </Splide>
          )}
      </section>
    </div>
  );
}
