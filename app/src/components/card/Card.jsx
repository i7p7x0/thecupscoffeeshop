import { React } from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      {props.cardType === "red" ? (
        <div className="card card-red">{props.children}</div>
      ) : props.cardType === "blue" ? (
        <div className="card card-blue">{props.children}</div>
      ) : props.cardType === "yellow" ? (
        <div className="card card-yellow">{props.children}</div>
      ) : props.cardType === "green" ? (
        <div className="card card-green">{props.children}</div>
      ) : props.cardType === "orange" ? (
        <div className="card card-orange">{props.children}</div>
      ) : props.cardType === "pink" ? (
        <div className="card card-pink">{props.children}</div>
      ) : props.cardType === "purple" ? (
        <div className="card card-purple">{props.children}</div>
      ) : props.cardType === "indigo" ? (
        <div className="card card-indigo">{props.children}</div>
      ) : (
        <div className="card card-dark ">{props.children}</div>
      )}
    </>
  );
};

export default Card;
