import { React } from "react";
import { Carousel } from "react-bootstrap";
import { GiCoffeeCup, GiHealthPotion } from "react-icons/gi";
import { FaCocktail, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import "./slider.css";

const Slider = (props) => {
  return (
    <div className="slider">
      <Carousel controls={false} indicators={false} slide={false} fade>
        <Carousel.Item interval={3000}>
          <div className="slider-container slider-item-0">
            <h1>
              <GiCoffeeCup size={75} />
            </h1>
            <div className="slider-paragraph">
              <div>
                <FaQuoteLeft />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit <br />
                  amet consectetur adipisicing <br />
                  elit. Error, eum.
                </p>
              </div>
              <div>
                <FaQuoteRight />
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slider-container slider-item-1">
            <h1>
              <FaCocktail size={75} />
            </h1>
            <div className="slider-paragraph">
              <div>
                <FaQuoteLeft />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit <br />
                  amet consectetur adipisicing <br />
                  elit. Error, eum.
                </p>
              </div>
              <div>
                <FaQuoteRight />
              </div>
            </div>
          </div>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slider-container slider-item-2">
            <h1>
              <GiHealthPotion size={75} />
            </h1>
            <div className="slider-paragraph">
              <div>
                <FaQuoteLeft />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit <br />
                  amet consectetur adipisicing <br />
                  elit. Error, eum.
                </p>
              </div>
              <div>
                <FaQuoteRight />
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slider-container slider-item-3">
            {" "}
            <h1>
              <ImHappy2 size={75} />
            </h1>
            <div className="slider-paragraph">
              <div>
                <FaQuoteLeft />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit <br />
                  amet consectetur adipisicing <br />
                  elit. Error, eum.
                </p>
              </div>
              <div>
                <FaQuoteRight />
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
