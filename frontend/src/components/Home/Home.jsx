import React from "react";
import bemCssModules from "bem-css-modules";
import Search from "../Search/Search";
import { useHistory } from "react-router";

import { default as HomeStyles } from "./Home.module.scss";
import showFindItems from "../findItems";

import bg from "../../assets/bg.jpg";

const trending = ["flower", "wallpapers", "backgroungs", "happy", "love"];

const style = bemCssModules(HomeStyles);

const Home = () => {
  const history = useHistory();

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
          Trending:{" "}
          {trending.map((item) => (
            <p
              onClick={() => {
                showFindItems(item, history);
              }}
              key={item}
              className={style("trends--item")}
            >
              {item}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Home;
