import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '.././shoes.json';




function ProductItem() {
  let { id } = useParams();

  const shoe = Shoes[id];

  if (!shoe) {
    return (
      <h1>Product Not Found!</h1>
    )
  }

  return (
    <div>
      <h1>Wellcome to Product Item Page!</h1>
      <div className="Link" >
        <h3>{shoe.name}</h3>
        <img src={shoe.img} height={500} alt='Shoes Image Not Found!' />
      </div>

    </div>
  );
}

export default ProductItem;
