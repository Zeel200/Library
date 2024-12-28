import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "../components/UI/Rating"
import Price from "../components/UI/price"

const BookInfo = ({ books }) => {
     return (
          <div id="books__body">
               <main id="books__main">
                    <div className="books__container">
                         <div className="row">
                              <div className="book__selected--top">
                                   <a href="/books" className="book__link">
                                        <FontAwesomeIcon icon="arrow-left" />
                                   </a>
                                   <a href="/books" className="book__link">
                                        <h2 className="book__selected--title-top">Books</h2>
                                   </a>
                              </div>
                              <div className="book__selected">
                                   <figure className="book__selected--figure">
                                        <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected-ig" />
                                   </figure>
                                   <div className="book__selected--description">
                                        <h2 className="book__selected--title">Crack the coding interview</h2>
                                        <Rating rating = "4.5" />
                                        <div className="book__selected--price">
                                             <Price />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
          </div>
     )
}

export default BookInfo