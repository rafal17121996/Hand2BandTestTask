import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactDom from "react-dom";
import bemCssModules from "bem-css-modules";

import { default as PopupStyles } from "./Popup.module.scss";

var formatter = new Intl.DateTimeFormat("pl", {
  month: "long",
  year: "numeric",
});

const style = bemCssModules(PopupStyles);

const Popup = ({ pic, open, onClose }) => {
  if (!open) return null;

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const place =
    formatter
      .format(Date.parse(pic.created_at.slice(0, 10)))
      .charAt(0)
      .toUpperCase() +
    formatter.format(Date.parse(pic.created_at.slice(0, 10))).slice(1);

  return ReactDom.createPortal(
    <div className={style("")}>
      <div className={style("popup_background")} />
      <div className={style("popup")}>
        <div className={style("auth")}>
          <img
            className={style("logo")}
            src={pic.user.profile_image.small}
            alt=""
          />
          <h1 className={style("name")}>{pic.user.name}</h1>
        </div>

        <div className={style("imgWrapper")}>
          <img src={pic.urls.full} alt="" />
        </div>
        <div className={style("infoWrapper")}>
          <i className="fas fa-map-marker-alt"></i>
          <span className={style("place")}>{pic.user.location || 'Unknown'}</span>
          <span className={style("date")}>{place || 'Unknown'}</span>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
