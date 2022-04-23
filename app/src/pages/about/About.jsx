import { React, useState } from "react";
import Card from "../../components/card/Card";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetAPICall from "../../hooks/useGetAPICall";
import "./about.css";
import inBench from "../../images/inBench.jpg";
import wheelie from "../../images/wheelie.jpg";
import outTree from "../../images/outTree.jpg";
import ImageContainer from "../../components/imageContainer/ImageContainer";
import {
  MdStore,
  MdOutlineMenu,
  MdInfo,
  MdEmail,
  MdPhoneInTalk,
  MdLocationPin,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { BsPatchQuestionFill, BsDash } from "react-icons/bs";

const About = (props) => {
  const [contactDetails, setContactDetails] = useState([]);
  const [responseLoaded, setResponseLoaded] = useState(false);

  useGetAPICall("contact", setContactDetails, setResponseLoaded);

  return (
    <>
      {responseLoaded ? (
        <div className="about">
          <div className="about-container">
            <div className="about-container-child about-b">
              <Card>
                <div>
                  <h3 className="about-child-header">
                    About us <BsPatchQuestionFill />
                  </h3>
                  <hr />
                  <p className="about-child-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quibusdam odit quasi voluptates dolor facere
                    consectetur. Incidunt eos deserunt ratione, asperiores ex
                    neque ipsum ab, eveniet, dolorem iste quasi rem? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Veniam
                    perspiciatis neque deserunt minus porro molestias impedit,
                    ut inventore officiis odit cumque tempore modi optio nobis
                    corrupti quod fugit est nostrum!
                  </p>
                </div>
              </Card>
            </div>
            <div className="about-container-child about-a">
              <Card>
                <div className="about-inner-child">
                  <h3 className="about-child-header">
                    Our Shop <MdStore />
                  </h3>
                  <hr />
                  <div className="child-body-segment">
                    <div className="child-image">
                      <ImageContainer imgSrc={wheelie} imgAlt={"wheelie"} />
                    </div>
                    <div className="child-body">
                      <p className="about-child-paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Necessitatibus quibusdam odit quasi voluptates
                        dolor facere consectetur. Incidunt eos deserunt ratione,
                        asperiores ex neque ipsum ab, eveniet, dolorem iste
                        quasi rem? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Veniam perspiciatis neque deserunt
                        minus porro molestias impedit, ut inventore officiis
                        odit cumque tempore modi optio nobis corrupti quod fugit
                        est nostrum!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="about-container-child about-c">
              <Card>
                <div>
                  <h3 className="about-child-header">
                    Our Menu <MdOutlineMenu />
                  </h3>
                  <hr />
                  <div className="child-body-segment">
                    <div className="child-image">
                      <ImageContainer
                        imgSrc={inBench}
                        imgAlt={"bench-inside"}
                      />
                    </div>
                    <div className="child-body">
                      <p className="about-child-paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Necessitatibus quibusdam odit quasi voluptates
                        dolor facere consectetur. Incidunt eos deserunt ratione,
                        asperiores ex neque ipsum ab, eveniet, dolorem iste
                        quasi rem?
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="about-container-child about-d">
              <Card>
                <div>
                  <h3 className="about-child-header">
                    Our Detail <MdInfo />
                  </h3>
                  <hr />
                  <div className="child-body-segment">
                    <div className="child-image">
                      <ImageContainer
                        imgSrc={outTree}
                        imgAlt={"tree-outside"}
                      />
                    </div>
                    <div className="child-body">
                      <p className="about-child-paragraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                      <div className="about-contact-details-container">
                        <ul>
                          <li className="contact-details-list-item">
                            <MdEmail /> {contactDetails[0].emailAddress}
                          </li>
                          <li className="contact-details-list-item">
                            <MdPhoneInTalk /> {contactDetails[0].contactNumber}
                          </li>
                          <li className="contact-details-list-item">
                            <MdLocationPin /> {contactDetails[0].location}
                          </li>
                          <li className="contact-details-list-item">
                            <RiInstagramFill />{" "}
                            {contactDetails[0].instagramHandle}
                          </li>
                          <span>
                            <MdOutlineAccessTimeFilled /> Timings
                          </span>
                          {contactDetails[0].timings.map((timing) => {
                            return (
                              <li
                                key={timing._id}
                                className="contact-details-list-item"
                              >
                                {timing.day} : 
                                {timing.openingTime} <BsDash />
                                {timing.closingTime}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default About;
