import React from 'react';
import Shoes from '.././shoes.json';
import { Link } from 'react-router-dom';


function Product() {
  console.log(Shoes);
  return (
    <div>
   

      <div className="ProductContainer">
        {Object.keys(Shoes).map(keyName => {
          const shoe = Shoes[keyName];
          return (
            
            <div>
              <h3 align="center">{shoe.name}</h3>
              <img src={shoe.img} height={500} align="center"/>

              
              
                
                <Link key={keyName}  to={`/product/${keyName}`}>
                <button className="button">
                <span>
                Buy Now
                </span> 
              </button>
              </Link>
              
            
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Product;
