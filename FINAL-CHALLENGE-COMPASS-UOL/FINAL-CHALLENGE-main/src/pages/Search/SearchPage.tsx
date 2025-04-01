import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

import './searchPage.css';
import shoppingCart from './images/shopping-cart.svg';
import searchIcon from '../HomePage/images/search.svg'
import chevron from './images/chevron-left.svg';
import headphone from '../ExploreProduct/images/headphone.svg';
import star from '../ExploreProduct/images/star.svg';
import morevertical from '../ExploreProduct/images/more-vertical.svg';

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

export default function SearchPage () {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    void fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await api.get('/a93df7f1-711b-46ab-96dc-61f4865ddcc9');
      const data = response.data as Product[];
      setProducts(data);
      setLoading(false);
      setFilteredProducts(data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  }  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  
    if (!searchTerm.trim()) {
      setFilteredProducts(products.slice(0, 3));
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  return (
    <div>
        <section className="menu">
            <Link to="/home">
              <img src={chevron} alt="Chevron Icon" />
            </Link>
            <p>Search</p>
            <Link to ="/cartPage">
              <img src={shoppingCart} alt="Shopping Cart" />
            </Link>
        </section>
        <form>
          <div className="searchBox">
              <img id="search" src={searchIcon} alt="Search Icon" />                
              <input 
                id="imputSearch" 
                type="text" 
                placeholder='Search headphone' 
                value={searchInput}  
                onChange={handleSearchChange}
              />                    
          </div>
        </form>       
        <section>
          {loading ? (
            <Loading />
          ) : filteredProducts.length === 0 ? (
            <p className="popularTitle">Product not found</p>
          ) : (
            <div>
              <p className="popularTitle">Popular product</p>
              <div className="popularSection">
                {filteredProducts.map((product) => (
                  <div className="popularProducts" key={product.id}>
                    <div className="popularImg">
                      <img className="productImg-3" src={headphone} alt="Product Image" />
                    </div>
                    <div className="popularDetails">
                      <p className="popularName">{product.name}</p>
                      <p className="popularPrice">{product.price}</p>
                      <div className="reviewsCard">
                        <div className="rating">
                          <img src={star} alt="Star" />
                          <p id="rating">{product.rating}</p>
                        </div>
                        <p id="reviewsLen">{product.reviews.length} Reviews</p>
                        <Link to={`/detailPage/${product.id}`}>
                          <img src={morevertical} alt=" " />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

    </div>
  );
}
