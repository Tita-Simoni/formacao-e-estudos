import './cartPage.css';
import chevron from '../Search/images/chevron-left.svg';
import trash from './images/trash-2.svg';
import minus from './images/minus.svg';
import plus from './images/plus.svg';
import headphone from '../ExploreProduct/images/headphone.svg';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from './CartProvider';

export default function CartPage () {
  const { cartItems, removeFromCart } = useContext(CartContext);

  console.log(cartItems);

  const [productQuantity, setProductQuantity] = useState<{ [key: number]: number }>({});
  
  const handleIncrement = (productId: number) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };
  
  const handleDecrement = (productId: number) => {
    setProductQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0),
    }));
  };
  
  const handleRemove = (productId: number) => {
    removeFromCart(productId);
    setProductQuantity((prevQuantity) => {
      const newQuantity = { ...prevQuantity };
      delete newQuantity[productId];
      return newQuantity;
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => {
      const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
      const quantity = productQuantity[item.id] || 0;

      if (!isNaN(itemPrice) && typeof quantity === 'number') {
        return total + itemPrice * quantity;
      }

      return total;
    },
    0
  );
  
  return (
    <div>
      <section className="menu">
        <Link to="/home">
          <img src={chevron} alt="Chevron Icon" />
        </Link>
        <p>Shopping Cart</p>
        <img src={trash} alt="Trash Icon" />
      </section>
      <section className="productsCart">
        {cartItems.map((product) => (
          <div key={product.id} className="productCart">
            <div className="productIMG">
              <img id="productImg" src={headphone} alt="Product Image" />
            </div>
            <div>
              <p className="productNameCart">{product.name}</p>
              <p className="productPriceCart">{product.price}</p>
              <div className="blockCart">
                <div className="plusMinus">
                  <img 
                    id="plusMinus" 
                    src={minus} 
                    alt="Minus Icon" 
                    onClick={() => handleDecrement(product.id)}
                  />  
                  <p>{productQuantity[product.id] || 0}</p>
                  <img 
                    id="plusMinus" 
                    src={plus} 
                    alt="Plus Icon" 
                    onClick={() => handleIncrement(product.id)}
                  />
                </div>
                <img 
                  id="trashIcon" 
                  src={trash} 
                  alt="Trash Icon" 
                  onClick={() => handleRemove(product.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="totalPrice">
          <p id="totalItems">Total Items</p>
          <p id="totalCost">$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className="btnSection">
          <button className="defaultBtn" id="btnDetails">Proceed to Checkout &gt;</button>
        </div>
      </section>
    </div>
  );
}
