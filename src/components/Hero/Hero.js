import React, { useState, useEffect } from "react";
// import "./Hero.scss";
import Carousel from "react-bootstrap/Carousel";

export const Hero = () => {
  let [header, setHeader] = useState([]);
  let [baseUrl, setbaseUrl] = useState("");

  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/header/headerapi");
    result = await result.json();
    setHeader(result.headerData);
    setbaseUrl(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="home">
    <Carousel>
      {header.map((header, index) => (
        <Carousel.Item key={index}>
          <div className="ecah-slider">
            <h1> {header.title} </h1>
            <img
              src={baseUrl + header.file_url}
              alt={index}
              style={{ width: "50%" }}
            />

            <a href={header.url} className="btn btn-primary">
              {header.url_title}
            </a>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};
