import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartDetail from './CartDetail';
import { getStoredReadList } from './Datastor/Datastor';



const Carts = () => {

    const AllproductsData = useLoaderData();
  
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState('');

    // console.log(products)

   

    useEffect(() => {
        const storedlist = getStoredReadList()
        const storedReadlistInt = storedlist.map(id => parseInt (id));
        console.log(storedlist, storedReadlistInt, AllproductsData);
        const cartProductlist = AllproductsData.filter(product => storedReadlistInt.includes(product.product_id));
        setProducts(cartProductlist);

    } , [])

    const handleSort = sortType => {
        setSort(sortType);
        if(sortType === 'price'){
            const sorteByprice = [...products].sort((a, b) => (a.price - b.price));
            setProducts(sorteByprice);
        }

     
    }

    const handleRating = sortType => {
        setSort(sortType);
      
        if(sortType === 'rating'){
            const sortedRating = [...products].sort((a, b) => a.rating - b.rating);
            setProducts(sortedRating);
        }
    }


    
    return (
        <>
          <div className='flex justify-between items-center max-w-6xl mx-auto my-6' >
           <div>
            <h3 className='text-2xl font-bold'>Cart</h3>
            </div>
            <div className='flex gap-4 items-center'>
            <p>Total cost:{products.length}</p>
            <button onClick={ () =>handleSort('price') }
            className='btn rounded-full px-4 border-2 border-fuchsia-600'>Sort by Price
            </button>

            <button className='btn rounded-full px-4 border-2 border-fuchsia-600'
             onClick={ () =>handleRating('rating')} >Purchase
             </button>
           </div> 
           </div>
      

        <div>  
             {
                  products.map(product => <CartDetail key={product.product_id} product={product}></CartDetail>)
             }
         </div>
        </>
    )
};

export default Carts;