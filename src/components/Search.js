import React, { useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import classes from "./Search.module.css";
import Subheading from "./Subheading";
import { useContext } from "react";
import { ImagesContext } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom";

const Search = (props) => {
  const [userInput, setuserInput] = useState("");

  const {images,fetchImageData}=useContext(ImagesContext)



  const getInput = () => {
    fetchImageData(userInput);
    props.onSearch(userInput)
  };

  return (<>
    <div className={classes.searchcontainer}>
      <input
        className={classes.searchinp}
        type="text"
        placeholder="Search..."
        onChange={(e)=>setuserInput(e.target.value)}
      />
      <Link to={userInput} className={classes.searchbtn} type="submit"  onClick={() => {
          getInput();}}>
        <i>
          <FontAwesomeIcon
            className={classes.searchicon}
            icon={faSearch}
            height="2em"
          />
        </i>
      </Link>
    </div>
  
    </>
  );
};

export default Search;
