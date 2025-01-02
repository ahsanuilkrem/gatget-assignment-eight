import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addproducts, addStoredWishlist } from '../Datastor/Datastor';

const ViewDetails = () => {


    const {product_id} = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const product = data.find(product => product.product_id === id);

    const { product_title, product_image,  price, description, Specification, availability, rating} = product


    const handleAddproduct = (id)=>{
        addproducts(id)      
       
    }

    const  handleFaicons = (id) =>{
      addStoredWishlist(id)
    }

    return (
  
   <div className=" bg-base-200 max-w-4xl  my-5 rounded-2xl absolute -mt-[120px] ml-52 ">
  <div className=" flex max-h-min">
   
    <div className="card bg-base-100 w-full h-full max-w-sm shrink-0 shadow-2xl">
      <img src={product_image} alt="" className='p-4 rounded-xl h-[500px]' />
    </div>


    <div className="ml-10 space-y-4 pt-4">
      <h2 className="text-4xl font-bold">{product_title}</h2>
      <p>Price: ${price}</p>
      <button className='btn btn-sm rounded-full px-5 py-1 text-green-700 border-1 border-green-600'>{availability ? 'In Stock' : 'Stock'}</button>

      <p className="">
        {description}
      </p>
      <div>
        <h3 className='mb-2'>Specification</h3>
        
        {
          Specification.map( (detail, index)  => <li type="1" key={index} detail={detail}>{detail}</li> )
        }
      
      </div>

        <div className="rating gap-1">
          <h2>Rating</h2>
            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
           
         </div>

       <div>
         <div className="rating">
             <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <p className=' rounded-full border-1 ml-2'>{rating}</p>
        </div>
       </div>


       <div className='flex gap-4 items-center'>
        <button onClick={ () => handleAddproduct(product_id)} className='btn btn-sm px-4 rounded-full bg-violet-700 text-white'>add to Card <IoCartOutline /></button>
        <p onClick={() => handleFaicons(product_id) } className='bg-white p-3 text-black  rounded-full'><FaRegHeart /></p>
       </div>

    </div>
  </div>
</div>

        
    );
};

export default ViewDetails;


