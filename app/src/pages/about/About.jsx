import { React } from "react";
import Card from "../../components/card/Card";
import "./about.css";

const About = (props) => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-container-child about-a">
          <Card>
            <div>
              <h1 className="about-child-header">Lorem, ipsum </h1>
              <hr />
              <p className="about-child-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quibusdam odit quasi voluptates dolor facere
                consectetur. Incidunt eos deserunt ratione, asperiores ex neque
                ipsum ab, eveniet, dolorem iste quasi rem?
              </p>
            </div>
          </Card>
        </div>
        <div className="about-container-child about-b">
          <Card>
            <div>
              <h1 className="about-child-header">Lorem, ipsum </h1>
              <hr />
              <p className="about-child-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quibusdam odit quasi voluptates dolor facere
                consectetur. Incidunt eos deserunt ratione, asperiores ex neque
                ipsum ab, eveniet, dolorem iste quasi rem? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veniam perspiciatis neque
                deserunt minus porro molestias impedit, ut inventore officiis
                odit cumque tempore modi optio nobis corrupti quod fugit est
                nostrum!
              </p>
            </div>
          </Card>
        </div>
        <div className="about-container-child about-c">
          <Card>
            <div>
              <h1 className="about-child-header">Lorem, ipsum </h1>
              <hr />
              <p className="about-child-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quibusdam odit quasi voluptates dolor facere
                consectetur. Incidunt eos deserunt ratione, asperiores ex neque
                ipsum ab, eveniet, dolorem iste quasi rem?
              </p>
            </div>
          </Card>
        </div>
        <div className="about-container-child about-d">
          <Card>
            <div>
              <h1 className="about-child-header">Lorem, ipsum </h1>
              <hr />
              <p className="about-child-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quibusdam odit quasi voluptates dolor facere
                consectetur. Incidunt eos deserunt ratione, asperiores ex neque
                ipsum ab, eveniet, dolorem iste quasi rem?
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
