import { React } from "react";
import { Spinner } from "react-bootstrap";
import "./loading-spinner.css";
const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <Spinner animation="grow" />
    </div>
  );
};

export default LoadingSpinner;
