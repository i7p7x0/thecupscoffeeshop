import { React } from "react";
import ImageContainer from "../../components/imageContainer/ImageContainer";
import imageCoffeeShop from "../../images/imageCoffeeShop.jpg";
import Slider from "../../components/slider/Slider";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-child home-image">
          <ImageContainer imgSrc={imageCoffeeShop} imgAlt="image-coffee-shop" />
        </div>
        <div className="home-content">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
