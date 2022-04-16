import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Admin = (props) => {
  const authentication = useSelector((state) => state.authentication);
  console.log(authentication.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate("/error");
    }
  }, [authentication.isLoggedIn]);
  return <div>Admin</div>;
};

export default Admin;
