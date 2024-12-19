import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
     <nav>
          <div className="nav__container">
               <a href="/">
                    <img src="/assets/Library.svg" alt="" className="logo" />
               </a>
               <ul className="nav__links">
                    <li className="nav_list">
                         <a href="" className="nav_link">
                              Home
                         </a>
                    </li>
                    <li className="nav_list">
                         <a href="" className="nav_link">
                              Books
                         </a>
                    </li>
                    <li className="nav_list">
                         <a href="" className="nav_link">
                              Contact Us
                         </a>
                    </li>
                    <button className="btn__menu">
                         <FontAwesomeIcon icon="bars" />
                    </button>
               </ul>
          </div>
     </nav>
}

export default Nav;