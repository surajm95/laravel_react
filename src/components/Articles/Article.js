import React, { useState, useEffect } from "react";

const Article = () => {
  let [article, setarticle] = useState([]);
  let [baseUrl, setbaseUrl] = useState("");

  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/article/articleapi");
    result = await result.json();
    setarticle(result.articleData);
    setbaseUrl(result.data);
  }

  useEffect(() => {
    
    fetchData();
  }, []);
  // console.log(article);
  return (
    <div className="row mt-4" id="article">
      <div id="article">
        <h5 className="text-center text-danger">THE MAGIC OF FLAVOR</h5>
        <h2 className="text-center text-dark">BENVENUTO FRIENDS</h2>
        <p className="text-center mb-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu. adipiscing elit. Ut blandit arcu.
        </p>
      </div>
      {article.map((article, index) => (
        <div className="col-sm-4" key={article.fid} id="article">
          <div className="card ml-8">
            <img
              src={baseUrl + article.file_url}
              className="card-img-top"
              alt="article"
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn btn-primary">
                {article.url_title}
              </a>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Article;
