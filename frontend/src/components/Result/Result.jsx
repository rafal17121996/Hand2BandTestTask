import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { createApi } from "unsplash-js";
import bemCssModules from "bem-css-modules";
import ScrollMenu from "react-horizontal-scrolling-menu";

import { default as ResultStyles } from "../Result/Result.module.scss";
import Search from "../Search/Search";
import CardItem from "./subComponent/CardItem";
import axios from "axios";
import { Link } from "react-router-dom";
import showFindItems from "../findItems";

const style = bemCssModules(ResultStyles);

const unsplash = createApi({
  accessKey: "QgXvC8fb6nDTrx9Obhni-HRmKvrFf1WCxHQ5q_FitRM",
});

const Result = () => {
  const history = useHistory();
  const [pics, setPics] = useState([]);
  const [info, setInfo] = useState([]);
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const { item } = useParams();

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: item,
        page: page,
        perPage: 20,
      })
      .then((result) => {
        if (result.errors) {
          console.log("error occurred: ", result.errors[0]);
        } else {
          setMaxPage(result.response.total_pages);
          setPics(result.response.results);
          result.response.results.length? setInfo("") : setInfo("- Not Found")
        }
      });

    axios
      .get("https://peaceful-dawn-37729.herokuapp.com/search", {
        params: {
          key: item,
        },
      })
      .then((res) => {
        if (res.errors) {
          console.log("error occurred: ", res.errors[0]);
        } else {
          setRelatedSearches(res.data.related_searches)
        }
      })        
  }, [item, page]);

  const handlePage = (i) => {
    if (i == -1 && page > 1) {
      setPage(page + i);
    } else if (i == 1 && page < maxPage) {
      setPage(page + i);
    }
  };


  return (
    <section>
      <Link className={style("back")} to="/">
      <i className="fas fa-chevron-circle-left"></i>
      </Link>
      <Search
      resetPage={()=>setPage(1)}
      />
      <ScrollMenu
        data={relatedSearches.map((item) => (
          <div
            key={item.title}
            className={style("item")}
            onClick={() => (showFindItems(item.title, history),setPage(1))}
          >
            <p>{item.title}</p>
          </div>
        ))}
      />

      <h1 className={style("title")}>
        {item.charAt(0).toUpperCase() + item.slice(1)} {info}
      </h1>
      <div className={style("")}>
        {pics.map((pic) => (
          <CardItem key={pic.id} pic={pic} />
        ))}
      </div>
      <div className={style("page")}>
        <i onClick={() => handlePage(-1)} className="fas fa-arrow-left"></i>
        <input
          type="text"
          className={style("inputPage")}
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <i onClick={() => handlePage(1)} className="fas fa-arrow-right"></i>
      </div>
    </section>
  );
};
export default Result;
