import React from 'react'
import { Button, Form, FormCheck } from "react-bootstrap";
import { useState } from 'react';
import './List.css';
import setFilteredlabel from '../../Items/Items';
import filteredlabel from '../../Items/Items'
import AvailableItems from '../../Items/AvailableItems';
import Items from '../../Items/Items';
import DUMMY_ITEMS from '../../Items/AvailableItems';

const List = (props) => {
  const ChangeHandler = (label) => {
    console.log('filter value',label);
    props.setFilteredlabel(label.target.value);
};

  // const ChangeHandler = (event) => {
  //   props.onChangeFilter(event.target.value);
  // };
    return (
      <div className="filters">
        <label className='title'>Filter by Category</label>

        <div
          //  id="category-input"
          //  value={selectedCategory}
          //  onChange={handleCategoryChange}
      
        >
          <button className={props.filteredlabel == 'Clothing' ? 'active view': 'view'} onClick={ChangeHandler} value='Clothing'>Clothing</button><br />
          <button className={props.filteredlabel == 'Cosmetics and Body care' ? 'active view': 'view'} onClick={ChangeHandler} value="Cosmetics and Body care">Cosmetics and Body care</button><br />
          <button className={props.filteredlabel == 'Home Decor' ? 'active view': 'view'}  onClick={ChangeHandler} value="Home Decor">Home Decor</button><br />
          <button className={props.filteredlabel == '' ? 'active view': 'view'}  onClick={ChangeHandler} value="">All</button>

        </div>
      </div>
    );
  };

  export default List;

/* <span>
//           <Form.Check
//             inline
//             label=" Clothing"
      
//             type="checkbox"
      

//           />
//         </span>
  
//         <span>
//           <Form.Check
//             inline
//             label=" Cosmetics and Body care"
     
//             type="checkbox"
//             id={`inline-2`}

//           /></span>
//         <span>
//           <Form.Check
//             inline
//             label=" Home Decor"
      
//             type="checkbox"
//             id={`inline-3`}

//           /></span> */
