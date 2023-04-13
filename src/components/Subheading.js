import React from 'react';
import classes from './Subheading.module.css'
const Subheading = (props) => {
  return (
    <div>
      <h1 id="subheading" className={classes.subheading}>{props.data} Pictures</h1>
    </div>
  );
}

export default Subheading;
