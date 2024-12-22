import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/highlight"

const Highlights = () => {
     return (
          <section id="highlights">
               <div className="container">
                    <div className="row">
                         <h2 className="section__title">Why choose <span className="purple">Library</span></h2>
                         <div className="highlight__wrapper">
                              <Highlight
                                   icon={<FontAwesomeIcon icon="bolt" />}
                                   title='Easy and Quick'
                                   para='Get instant access to books you purchased' />
                              <Highlight
                                   icon={<FontAwesomeIcon icon="book-open" />}
                                   title='10,000+ Books'
                                   para='We have books in all your favorite categories' />
                              <Highlight
                                   icon={<FontAwesomeIcon icon="tags" />}
                                   title='Affordable'
                                   para='Get your hands on popular books for as low as $10' />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Highlights