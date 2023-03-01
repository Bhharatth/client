import React from 'react';
import {popularProducts} from "../../data"
import Product from '../Product/Products';
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <div className='popularProducts'>
       {popularProducts.map((item)=> (
            <Product item={item}/>
        ))}
    </div>
  )
}

export default FeaturedProducts