import { useContext } from "react";
import { ImagesContext } from "../Context";
import {Link } from "react-router-dom";
import classes from "./Images.module.css";
const Images = () => {
const {images,fetchImageData}=useContext(ImagesContext)


  return (
   <> 
   {images.length===0?(<p className={classes.notfound}>No results found.</p>):(
  <div className={classes.imagecontainer}>
  <ul className={classes.images}>
    {images.map((item) => (
      <Link to={item.title} className={classes.image}>
        <img className={classes.img}
          key={item.id}
          src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
          alt="images"
        />
      </Link>
    ))}
  </ul>
</div>
   )}
  
    </>
  );
};

export default Images;
