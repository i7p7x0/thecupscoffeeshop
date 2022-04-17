import { React } from "react";
import ImageContainer from "../../components/imageContainer/ImageContainer";
import imageCoffeeShop from "../../images/imageCoffeeShop.jpg";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <ImageContainer imgSrc={imageCoffeeShop} imgAlt="image-coffee-shop" />
      </div>
      <div className="home-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        corporis excepturi praesentium commodi amet sit neque quam cum<br/>
        asperiores nemo deserunt ipsam ex, suscipit, officiis cupiditate ad quos
        eligendi explicabo laudantium debitis nostrum? Accusamus suscipit
        veritatis consequuntur soluta quia maxime, veniam, voluptas fuga
        eligendi exercitationem minima necessitatibus doloremque. Expedita,
        fugiat.
      </div>
    </div>
  );
};

export default Home;
