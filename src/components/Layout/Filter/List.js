import React from 'react'
import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import './List.css';


const List = () => {

   const [rate, setRate] = useState(2)

  return (
    <div className="filters">
      <div className='filter-box'>
        <h2 >Filter by Category</h2>
        <span>Clothing</span><br/>
        <span>Cosmetics and Body Care</span><br/>
        <span>Home Decor</span><br/>
      </div>

    </div>
  );
};

export default List;