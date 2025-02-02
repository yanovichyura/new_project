import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, RegisterLogin, Cart, Product } from "./components";
import { Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import products from "./components/Products";

function App() {
  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/login" element={<RegisterLogin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route
              path="/"
              element={
                <>
                  <section className="sale_sale_sale_section">
                    <img
                      src="../img/body_img/first_background.png"
                      alt="Знижки Знижки Знижки"
                      className="wrapper_sale_banner"
                    />
                    <div className="sale_content">
                      <h1>Тиждень знижок</h1>
                      <p>
                        Ми підібрали для вас найкращі товари за найвигіднішими
                        цінами
                      </p>
                      <button>Переглянути</button>
                    </div>
                  </section>

                  <section className="best_seller_section">
                    <h2>Хіти продаж</h2>
                    <div className="best_seller_items">
                      {products.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                          <div className="best_seller_item">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price} грн</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>

                  <div className="garden-home-section">
                    <img
                      src="../img/body_img/everything.svg"
                      alt="Garden tools"
                      className="garden-home-img"
                    />
                    <div className="garden-home-text">
                      <h2>Товари для дому та саду</h2>
                      <p>Товари на різні випадки життя</p>
                      <ul>
                        <img src="../img/body_img/Group.svg" />
                        <li>Інструменти</li>
                        <img src="../img/body_img/Group.svg" />
                        <li>Миючі засоби</li>
                        <img src="../img/body_img/Group.svg" />
                        <li>Товари для будівництва</li>
                        <img src="../img/body_img/Group.svg" />
                        <li>Товари для дому</li>
                      </ul>
                      <button>Дізнатись більше</button>
                    </div>
                  </div>

                  <section className="something_else_section">
                    <h2>Декілька інших категорій</h2>
                    <h4>Найпопулярніші категорії</h4>
                    <div className="popular_items">
                      <div className="popular_item">
                        <img src="../img/body_img/boy.svg" alt="" />
                        <h3>Спортивні товари</h3>
                        <p>Спортивний одяг та аксесуари</p>
                      </div>
                      <div className="popular_item">
                        <img src="../img/body_img/cloth.svg" alt="" />
                        <h3>Одяг</h3>
                        <p>Одяг та взуття для дітей та дорослих</p>
                      </div>
                      <div className="popular_item">
                        <img src="../img/body_img/Apple.svg" alt="" />
                        <h3>Техніка</h3>
                        <p>Техніка та аксесуари</p>
                      </div>
                    </div>
                  </section>

                  <section className="used_items_section">
                    <h2>Уживаний товар</h2>
                    <h4>Заощаджуйте на товарі</h4>
                    <div className="used_items_container">
                      <div className="used_item">
                        <img
                          src="../img/body_img/wash.svg"
                          alt="Пральна машина"
                        />
                        <h3>Пральна машина Samsung</h3>
                        <p>6650 грн</p>
                      </div>
                      <div className="used_item">
                        <img
                          src="../img/body_img/bicycle.svg"
                          alt="Велосипед"
                        />
                        <h3>Велосипед</h3>
                        <p>5000 грн</p>
                      </div>
                      <div className="used_item">
                        <img src="../img/body_img/Audi.svg" alt="Диски Audi" />
                        <h3>Диски титанові Audi A6 C8 R21</h3>
                        <p>21000 грн</p>
                      </div>
                      <div className="used_item">
                        <img
                          src="../img/body_img/freez.svg"
                          alt="Холодильник"
                        />
                        <h3>Холодильник</h3>
                        <p>11999 грн</p>
                      </div>
                    </div>
                  </section>
                </>
              }
            />
          </Routes>

          <footer>
            <div className="white_footer_line"></div>

            <div className="footer_logo_section">
              <img
                src="../img/header_img/logo.svg"
                alt="logo"
                className="footer_logo"
              />
              <p className="footer_title">YBuy</p>
              <p className="footer_description">
                Маркетплейс, де Ви зможете знайти товари на будь-яку потребу
              </p>
            </div>

            <div className="footer_column">
              <h3 className="footer_heading">Юридична інформація</h3>
              <ul className="footer_links">
                <li>
                  <a href="#">Умови використання</a>
                </li>
                <li>
                  <a href="#">Політика конфіденційності</a>
                </li>
                <li>
                  <a href="#">Правила публікації оголошень</a>
                </li>
              </ul>
            </div>

            <div className="footer_column">
              <h3 className="footer_heading">Безпека</h3>
              <ul className="footer_links">
                <li>
                  <a href="#">Захист даних користувачів</a>
                </li>
                <li>
                  <a href="#">Розділ FAQ</a>
                </li>
                <li>
                  <a href="#">Інструменти для виявлення шахраїв</a>
                </li>
              </ul>
            </div>

            <div className="footer_column">
              <h3 className="footer_heading">Допомога</h3>
              <ul className="footer_links">
                <li>
                  <a href="#">Оплата</a>
                </li>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Зворотній зв’язок</a>
                </li>
              </ul>
            </div>
          </footer>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
