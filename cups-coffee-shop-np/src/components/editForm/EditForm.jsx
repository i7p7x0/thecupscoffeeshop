import { React } from "react";

const EditForm = (props) => {
  return (
    <div className="edit-form">
      <div className="edit-form-header">
        <h4>{props.header}</h4>
      </div>
      <div className="edit-form-container">{props.children}</div>
    </div>
  );
};

export default EditForm;
