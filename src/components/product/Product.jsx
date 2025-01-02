import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {product_id, product_title, product_image, price} = product || {};
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">

  <figure>
    <img
      src={product_image}
      className='h-[180px] w-[280px] rounded-2xl'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">{product_title}</h2>
    <p className='text-xl font-medium'>Price: {price}</p>
    <div className="card-actions justify-start">
      <button className="btn text-lg font-semibold rounded-full text-fuchsia-500 border-2 border-fuchsia-500"> <Link to={`/product/${product_id}`}>View Details</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;


