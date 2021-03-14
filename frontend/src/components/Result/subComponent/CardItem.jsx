import React, { useState } from "react";
import bemCssModules from "bem-css-modules";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { default as ResultStyles } from "../Result.module.scss";
import Popup from "./Popup";

const style = bemCssModules(ResultStyles);

const CardItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <LazyLoadImage      
        onClick={() => setIsOpen(true)}
        className={style("card--image")}
        alt={props.pic.alt_description}
        src={props.pic.urls.small}
        width="100%"
        effect="blur"
   />

      <Popup
        pic={props.pic}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Popup>
    </div>
  );
};
export default CardItem;
