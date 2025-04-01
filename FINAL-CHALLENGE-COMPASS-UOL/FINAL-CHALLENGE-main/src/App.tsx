import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Login/SingIn';
import SignUp from './pages/Login/SignUp';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/Search/SearchPage';
import ExplorePage from './pages/ExploreProduct/ExplorePage';
import DetailPage from './pages/ProductDetail/DetailPage';
import CartPage from './pages/ShoppingCart/CartPage';
import CartProvider from './pages/ShoppingCart/CartProvider';

import './inex.css';

export default function App () {
  return (
    <CartProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/home" element={<HomePage />} />   
              <Route path="/searchPage" element={<SearchPage />} />
              <Route path="/explorePage" element={<ExplorePage />} />       
              <Route path="/detailPage/:id" element={<DetailPage />} />      
              <Route path="/cartPage" element={<CartPage />} />
          </Routes>
      </BrowserRouter>  
    </CartProvider>
  );
}

