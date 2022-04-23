import { React } from "react";
import { ProgressBar } from "react-bootstrap";
import "./loading-progress-bar.css";
const LoadingProgressBar = (props) => {
  return (
    <div className="loadingSpinner">
      {/* <Spinner animation="grow" /> */}
      <ProgressBar animated now={100} variant="info" />
    </div>
  );
};

export default LoadingProgressBar;
