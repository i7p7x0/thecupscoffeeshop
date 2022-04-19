import { React } from "react";
import { MdArrowBack } from "react-icons/md";
import "./edit-form.css";
const EditForm = (props) => {
  return (
    <div className="edit-form">
      <div className="edit-form-header">
        <div>
          <h4>{props.header}</h4>
        </div>
       
      </div>
      <div className="edit-form-container">{props.children}</div>
    </div>
  );
};

export default EditForm;
