import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  // console.log(props.images);
    const images = props.images.map(({description, id,urls})=>{
      return <img
      alt = {description}
      key={id}
      src = {urls.regular} />
  });

  return(
    <div className="image-list">
    {images}
    </div>
  );
};

export default ImageList;
