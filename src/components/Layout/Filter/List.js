import React from 'react'
import { Button, Form, FormCheck } from "react-bootstrap";
import { useState,useEffect } from 'react';
import './List.css';
import setFilteredlabel from '../../Items/Items';
import filteredlabel from '../../Items/Items'
import AvailableItems from '../../Items/AvailableItems';
import Items from '../../Items/Items';
import DUMMY_ITEMS from '../../Items/AvailableItems';
import * as  axios from 'axios';
import setlabel from '../../Items/Items'

const List = (props) => {
  const ChangeHandler = (label) => {
    console.log('filter value', label.target.value);
    props.setFilteredlabel(label.target.value);
    // setlabel(label===''?'filteredlabel':'');
  };
  
  return (
    <div className="filters">
      <label className='title'>Filter by Category</label>

      <div>
        <button className={props.filteredlabel == 'Clothing' ? 'active view' : 'view'} onClick={ChangeHandler} value='Clothing'>Clothing</button><br />
        <button className={props.filteredlabel == 'Cosmetics and Body care' ? 'active view' : 'view'} onClick={ChangeHandler} value="Cosmetics and Body care">Cosmetics and Body care</button><br />
        <button className={props.filteredlabel == 'Home Decor' ? 'active view' : 'view'} onClick={ChangeHandler} value="Home Decor">Home Decor</button><br />
        <button className={props.filteredlabel == '' ? 'active view' : 'view'} onClick={ChangeHandler} value="">All</button>

      </div>
      <h3>{filteredlabel}</h3>
      {/* {Items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
    </div>
  );
};

export default List;
