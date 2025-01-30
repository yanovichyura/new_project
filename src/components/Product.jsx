// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Product = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [cart, setCart] = useState([]);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const addToCart = () => {
//     const product = {
//       id: 1,
//       name: "Кросівки Puma X-Ray Speed Mid",
//       price: 3190,
//       quantity: quantity,
//     };

//     setCart([...cart, product]);
//     alert(`${product.name} додано до кошика!`);
//   };

//   return (
//     <section className="product-container">
//       <div className="product-image">
//         <img
//           src="../img/body_img/image_10_bg_removed.png.png"
//           alt="Кросівки Puma X-Ray Speed Mid"
//         />
//       </div>
//       <div className="product-details">
//         <h1 className="product-title">
//           Кросівки <span className="brand">Puma X-Ray Speed Mid</span>
//         </h1>
//         <p className="product-price">3190 грн</p>

// <div className="product-options">
//   <div className="option">
//     <label>
//       <input type="radio" name="delivery" checked /> Доставка у
//       відділення пошти
//     </label>
//   </div>
//   <div className="option">
//     <label>
//       <input type="radio" name="delivery" /> Доставка кур’єром
//     </label>
//   </div>
//   <div className="option">
//     <label>
//       <input type="radio" name="payment" /> Купити на виплату
//       <select>
//         <option>1 місяць</option>
//         <option>3 місяці</option>
//         <option>6 місяців</option>
//       </select>
//     </label>
//   </div>
// </div>

//         <div className="quantity-container">
//           <span>Кількість</span>
//           <button className="quantity-button" onClick={decreaseQuantity}>
//             -
//           </button>
//           <span className="quantity-value">{quantity}</span>
//           <button className="quantity-button" onClick={increaseQuantity}>
//             +
//           </button>
//         </div>

//         <Link to="/cart">
//           <button className="add-to-cart" onClick={addToCart}>
//             <span className="cart-icon">&#128722;</span> +Додати до кошика
//           </button>
//         </Link>

// <p className="product-info">
//   Ціни у інших продавців від 3020 грн до 4099 грн <br />
//   Вживані ~ 1300 грн
// </p>
// <p className="free-shipping">БЕЗКОШТОВНА ДОСТАВКА</p>
// <div className="product-specs">
//   <p>Розмір: 42</p>
//   <p>Матеріал верху: 64,06% шкіра, 35,94% ПУ</p>
//   <p>Матеріал підошви: Гума</p>
//   <p>Арт.: 388574_03</p>
// </div>

// <div className="cart-info">
//   {cart.length > 0 ? (
//     <p>У кошику {cart.length} товарів</p>
//   ) : (
//     <p>Кошик порожній</p>
//   )}
// </div>
//       </div>
//     </section>
//   );
// };

// export default Product;
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState("post");
  const [paymentPlan, setPaymentPlan] = useState("");

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Кросівки Puma X-Ray Speed Mid",
      price: 3190,
      quantity: quantity,
    };
    addToCart(product);
    alert(`${product.name} додано до кошика!`);
  };

  return (
    <section className="product-container">
      <div className="product-image">
        <img src="/img/body_img/image_10_bg_removed.png.png" alt="Кросівки Puma X-Ray Speed Mid" />
      </div>

      <div className="product-details">
        <h1 className="product-title">
          Кросівки <span className="brand">Puma X-Ray Speed Mid</span>
        </h1>
        <p className="product-price">3190 грн</p>

        <div className="quantity-container">
          <span>Кількість</span>
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <span className="quantity-value">{quantity}</span>
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>

        <div className="product-options">
          <div className="option">
            <label>
              <input 
                type="radio" 
                name="delivery" 
                value="post" 
                checked={delivery === "post"} 
                onChange={() => setDelivery("post")}
              /> Доставка у відділення пошти
            </label>
          </div>
          <div className="option">
            <label>
              <input 
                type="radio" 
                name="delivery" 
                value="courier" 
                checked={delivery === "courier"} 
                onChange={() => setDelivery("courier")}
              /> Доставка кур’єром
            </label>
          </div>
          <div className="option">
            <label>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentPlan !== ""}
                onChange={() => setPaymentPlan("1 місяць")}
              /> Купити на виплату
              <select value={paymentPlan} onChange={(e) => setPaymentPlan(e.target.value)}>
                <option value="">Оберіть період</option>
                <option value="1 місяць">1 місяць</option>
                <option value="3 місяці">3 місяці</option>
                <option value="6 місяців">6 місяців</option>
              </select>
            </label>
          </div>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          <span className="cart-icon">&#128722;</span> +Додати до кошика
        </button>

        <div className="cart-info">
          {cart.length > 0 ? <p>У кошику {cart.length} товарів</p> : <p>Кошик порожній</p>}
        </div>
      </div>
    </section>
  );
};

export default Product;
