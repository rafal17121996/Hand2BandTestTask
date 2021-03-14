import React from "react";
import bemCssModules from "bem-css-modules";
import Search from "../Search/Search";

import { default as HomeStyles } from "./Home.module.scss";


import bg from "../../assets/bg.jpg";

const style = bemCssModules(HomeStyles);

const Home = () => {



  return (
    <div
      style={{
        backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})`,
      }}
      className={style("")}
    >
      <div className={style("container")}>
        <h1 className={style("title")}>Unsplash</h1>
        <span className={style("description")}>
          The internet’s source of {}
          <a href="https://unsplash.com/license">freely-usable images</a>.{" "}
          <br />
          Powered by creators everywhere.
        </span>
        <Search />
        <span className={style("trends")}>
          Trending: flower, wallpapers, backgroungs, happy, love
        </span>
      </div>
    </div>
  );
};

export default Home;
