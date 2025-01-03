import React from "react";
import Logo from "../assets/Library.svg";

const Footer = () => {
     return (
          <footer>
               <div className="container">
                    <div className="row row__column">
                         <a href="/">
                         <figure className="footer__logo">
                              <img src={Logo} alt="" className="footer__logo--img" />
                         </figure>
                         </a>
                         <div className="footer__list">
                              <a href="/" className="footer__link">Home</a>
                              <a href="/about" className="footer__link">About</a>
                              <a href="/books" className="footer__link">Books</a>
                              <a href="/cart" className="footer__link">Cart</a>
                         </div>
                         <div className="footer__copyright">Copyright &copy; 2024 Library</div>
                    </div>
               </div>
          </footer>
     )
}

export default Footer
