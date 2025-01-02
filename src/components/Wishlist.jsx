import React, { useEffect, useState } from 'react';
import { getStoredWishList } from './Datastor/Datastor';
import { useLoaderData } from 'react-router-dom';
import WishlistDetail from './WishlistDetail';


const Wishlist = () => {

    const [wishLists, setWishLists] = useState([])
    const AllproductsData = useLoaderData();
    console.log(wishLists)

    useEffect(() => {
        const storeWishlist = getStoredWishList()
        const wishlistStoreInt = storeWishlist.map(id => parseInt(id));
        console.log(storeWishlist, wishlistStoreInt, AllproductsData, );
        const wishlistAddproduct = AllproductsData.filter(product => wishlistStoreInt.includes(product.product_id));
        setWishLists(wishlistAddproduct);


    }, []) 
            

    
    return (
      
          
            <div>
                   {
                    wishLists.map(product  => <WishlistDetail key={product.product_id} product={product}></WishlistDetail>)
                   }
                </div>
     
    );
};

export default Wishlist;
