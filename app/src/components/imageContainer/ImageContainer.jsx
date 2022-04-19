import { React } from "react";
import "./image-container.css";
const ImageContainer = (props) => {
  return (
    <div className="image-container">
      <img className="image-container-child" src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
};

export default ImageContainer;
