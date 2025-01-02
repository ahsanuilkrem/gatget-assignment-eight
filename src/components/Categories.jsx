import React from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';

const Categories = ({loadCategory}) => {

  const navigase = useNavigate()
    return (
      <>
     

        
        <div className='bg-slate-50 p-4'>
            <NavLink onClick={() => navigase ('category/:category')} className='menu bg-fuchsia-800 text-slate-50 text-xl font-semibold rounded-full w-40 text-center mb-3'>All products</NavLink>            
          {
            loadCategory.map(category => (
                
                <NavLink to={`/category/${category.category}`} 
                key={category.category} 
                
                className=''
                >
               <ol className="menu bg-base-200 rounded-full w-40 text-xl font-semibold text-center mb-3">{category.category}</ol></NavLink> 
              ) )
          }   
        </div>

        </>
    );
};

export default Categories;