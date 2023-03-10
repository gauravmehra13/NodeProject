import React from "react";
import { useContext } from "react";
import { ContextData } from "./ContextApi";
import { useParams, Link } from "react-router-dom";
import "./index.css";

const Article = () => {
  const [data] = useContext(ContextData);
  var { path } = useParams();
  path = +path;
  var categor;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === path) {
      categor = data[i].category;
      break;
    }
  }
  console.log(typeof path);
  console.log(categor);

  return (
    <div>
      {data
        .filter((value) => value.id === path)
        .map((val) => (
          <div className="article-content-wrapper">
            <h2>{val.Title}</h2>
            <img src="{val.ImageAsset}" alt="" className="article-img" />
            <p style={{ position: "relative", top: "1rem", height: "auto" }}>
              {val.BlogContent}
            </p>
            <hr
              style={{ marginTop: "2rem", position: "relative", width: "100%" }}
            />
          
          </div>
        ))}

      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",

          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <h2>More From The Siren</h2>
      </div>
      <div
        className="underline"
        style={{ margin: "auto", marginTop: "0.5rem" }}
      ></div>

      <div className="article-wrapper">
        {data
          .filter((value) => value.id !== path && value.category === categor)
          .map((val) => (
            <div key={val.id} className="sports">
              <Link
                to={`/article/${val.id}`}
                style={{ position: "relative", width: "5rem" }}
              >
                <img src={val.ImageAsset} alt="" className="sports-img" />
              </Link>

              <h3>{val.BlogContent}</h3>
              <p className="texts">{val.Title}</p>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "black",
                  top: "0.5rem",
                  position: "relative",
                }}
              >
                Date:
              </span>
              <span
                style={{
                  color: "grey",
                  fontSize: "0.6rem",
                  marginLeft: "10px",
                  top: "0.5rem",
                  position: "relative",
                }}
              >
                TODAY
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Article;
