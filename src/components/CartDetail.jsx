import React from 'react';

const CartDetail = ({product }) => {
    console.log(product)
     const { product_title, product_image,  price, description, } = product
    return (
        <div className='flex gap-8 m-5 max-w-3xl mx-auto bg-stone-100 p-4 rounded-2xl '>
            <div>
                <img className='w-28 h-24 rounded-2xl' src={product_image} alt="" />
            </div>
            <div>
                <h2>{product_title}</h2>
                <p>{description}</p>
                <p>Price${price}</p>
            </div>
            <div>
                <h2>Delata</h2>
            </div>

        </div>
    );
};

export default CartDetail;