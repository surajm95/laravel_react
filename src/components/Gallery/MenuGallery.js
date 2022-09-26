import React, { useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import './gallery.css';

const MenuGallery = () => {
  const [galleryData, setgalleryData] = useState([]);
  const [baseUrl, setbaseUrl] = useState("");
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);

  const handelIamge = (index) => {
    setisOpen(true);
    setphotoIndex(index);
  };

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/gallery/galleryapi")
      .then((response) => response.json())
      .then((result) => {
        setgalleryData(result.galleryData);
        setbaseUrl(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="menugallery">
      <div>
        <h6 className="text-center text-danger">Gallery</h6>
        <h2 className="text-center text-dark">Kaju's Pizza </h2>
        <p className="text-center mb-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu. adipiscing elit. Ut blandit arcu.
        </p>
      </div>
      <div className="gallery">
        {galleryData.map((gallery, index) => (
          <div className="pics" key={gallery.id}>
            <img
              src={baseUrl + gallery.image.file_url}
              alt={index}
              style={{width:'100%'}}
              onClick={() => handelIamge(index)}
            />
          </div>
        ))};
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={baseUrl + galleryData[photoIndex].image.file_url}
          nextSrc={baseUrl + galleryData[(photoIndex + 1) % galleryData.length]}
          prevSrc={
            baseUrl +
            galleryData[
              (photoIndex + galleryData.length - 1) % galleryData.length
            ]
          }
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex(
              (photoIndex + galleryData.length - 1) % galleryData.length
            )
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % galleryData.length)
          }
        />
      )}
    </div>
  );
};
export default MenuGallery;
