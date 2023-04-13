import React from 'react';
import classes from './Options.module.css'
import { Route,Routes,Link } from "react-router-dom";
import { useContext } from "react";
import { ImagesContext } from "../Context";
const Options = (props) => {
    const {images,fetchImageData}=useContext(ImagesContext)
   
    const options=[
        {
            id:'mountains',
            name:'Mountains'
        },
        {
            id:'flowers',
            name:'Flowers'
        },
        {
            id:'food',
            name:'Food'
        },
        {
            id:'birds',
            name:'Birds'
        },
    ]
    const getInput=(name)=>{
        console.log(name)
        props.onSearch(name)
        fetchImageData(name)
    }
  return (
    <div className={classes.optionscontainer}>
        <ul className={classes.options}>
        {options.map((items)=>(<Link to={items.id} onClick={() => {
          getInput(items.id);}} className={classes.option}>{items.name}</Link>))}
        </ul>
    </div>
  );
}

export default Options;
