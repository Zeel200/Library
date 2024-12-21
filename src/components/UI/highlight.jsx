import React from "react";

const Highlight = ({ icon }) => {
     return (
          <div className="highlight">
               <div className="highlight__img">{icon}</div>
               <h3 className="highlight__subtitle">Easy and Quick</h3>
               <p className="highlight__para">Get instant access to books you purchased</p>
          </div>
     )
}

export default Highlight