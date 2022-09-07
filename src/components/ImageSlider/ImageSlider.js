import React from "react";
import { useState, useEffect } from "react";
import { projectStorage, db, getNames } from "../firebase/firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import "./ImageSlider.css";

const ImageSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrent] = useState(0);
  const [names, setNames] = useState([]);

  const ImageListLength = imageList.length;
  const imageListRef = ref(projectStorage, "images/");

  useEffect(() => {
    getNames(db).then((newNames) => setNames(newNames));
  }, []);

  console.log(names);

  useEffect(() => {
    listAll(imageListRef).then((Response) => {
      Response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const nextImage = () => {
    //setCurrent(currentImage === ImageListLength - 1 ? 0 : ImageListLength + 1)
    if (currentImage === ImageListLength - 1) {
      setCurrent(0);
    } else {
      setCurrent(currentImage + 1);
    }
  };

  const prevImage = () => {
    setCurrent(currentImage === 0 ? ImageListLength - 1 : currentImage - 1);
  };

  if (!Array.isArray(imageList) || imageList.length <= 0) {
    return null;
  }

  return (
    <div className="imageSlider">
      {imageList.map((url, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={index}
          >
            {index === currentImage && (
              <img className="sliderImage" src={url} alt="sharon" />
            )}
          </div>
        );
      })}
      <button onClick={nextImage}> </button>
      <button onClick={prevImage}> Prev</button>
    </div>
  );
};

export default ImageSlider;
