import React from 'react';
import "./categories.css";
import Category from '../category/Category';
import { categories } from '../../data';

const Categories = () => {
  return (
    <div className='categories'>
        {categories.map((item)=> (
            <Category item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories