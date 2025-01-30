import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <section className="cart-container">
      <h2 className="cart-title">Товари у кошику</h2>
      <Link to="/" className="back-link">Назад до покупок</Link>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <>
          <div className="cart-header">
            <span>Товар</span>
            <span>Ціна</span>
            <span>Кількість</span>
            <span>Загалом</span>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-image2">
                <img src="/img/body_img/image_10_bg_removed.png.png" alt={item.name} />
              </div>
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <button className="remove-link" onClick={() => removeFromCart(item.id)}>Видалити</button>
              </div>
              <div className="product-price">
                <strong>{item.price} грн</strong>
              </div>
              <div className="product-quantity">
                <input 
                  type="text" 
                  value={item.quantity} 
                  readOnly 
                  className="quantity-input"
                />
              </div>
              <div className="product-total">
                <strong>{item.price * item.quantity} грн</strong>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <span>До оплати:</span>
            <span className="total-price">
              <strong>
                {cart.reduce((total, item) => total + item.price * item.quantity, 0)} грн
              </strong>
            </span>

            <button className="checkout-btn">Оплата</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
