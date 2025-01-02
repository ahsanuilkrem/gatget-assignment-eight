import { useLoaderData, useParams } from "react-router-dom";
import Product from "../product/Product";
import { useEffect, useState } from "react";




const Products = () => {

    const data = useLoaderData()
  

    


    const [product, setProducts] = useState([]);
    const { category } = useParams();
    console.log(product)

    useEffect( () => {
       if(category){
        const categoreFilter = [...data].filter(
            products => products.category === category
        )
        setProducts(categoreFilter);

       }
       else{
        setProducts(data)
       }

    }, [category,])
  

 

    return (
        <div className=''>
            
            

        

                 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {
                        product.map(product => <Product product={product} key={product.product_id}></Product> )
                    }
                </div>
               
            
        </div>
    );
};

export default Products;