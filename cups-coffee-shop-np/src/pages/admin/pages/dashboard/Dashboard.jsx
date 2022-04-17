import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../../../components/card/Card";
import { FaInfoCircle } from "react-icons/fa";
import routes from "../../../../constants/routes";
import {
  MdRestaurantMenu,
  MdAdminPanelSettings,
  MdAnalytics,
  MdOutlineAttachMoney,
  MdDeveloperMode,
  MdCoffeeMaker,
} from "react-icons/md";
import { RiFolderUserFill } from "react-icons/ri";
import "./dashboard.css";
const Dashboard = (props) => {
  // check if user is authenticated
  const authentication = useSelector((state) => state.authentication);

  // redirect to error page if user is not authenticated
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate(routes.home);
    }
  }, [authentication.isLoggedIn]);

  return (
    <div className="admin">
      <div className="admin-child admin-dashboard">
        <h4 className="admin-header">Admin Dashboard</h4>
        <hr />
      </div>
      <div className="admin-container">
        <div className="admin-child admin-edit-info-button">
          <Card cardType="red">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Personal info</h4>
              <FaInfoCircle size={28} />
            </div>

            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, fugiat. Animi aspernatur esse commodi tempore ipsum
                itaque sit magnam rerum.
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="blue">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Menu</h4>
              <MdRestaurantMenu size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam fuga repellat nostrum facilis quibusdam corrupti optio
                reiciendis doloribus veritatis pariatur.
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="yellow">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Password</h4>
              <MdAdminPanelSettings size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora maiores unde culpa tenetur neque in temporibus est
                doloribus quos animi.
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="green">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Analytics</h4>
              <MdAnalytics size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                provident ipsum beatae repellat delectus dolor deserunt aut vero
                laboriosam ea.{" "}
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="indigo">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Profit</h4>
              <MdOutlineAttachMoney size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                eligendi cumque porro ut vero blanditiis beatae reiciendis,
                repellendus sunt odio.
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="orange">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Developer</h4>
              <MdDeveloperMode size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quos unde explicabo provident fugiat minus! Esse
                necessitatibus ex nisi doloribus.
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="pink">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Customers</h4>
              <RiFolderUserFill size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                molestiae sapiente provident minima unde voluptatum a, iure
                facere autem expedita!
              </p>
            </div>
          </Card>
        </div>
        <div className="admin-child admin-edit-menu-button">
          <Card cardType="purple">
            <div className="admin-edit-info-header">
              <h4 className="admin-header">Items</h4>
              <MdCoffeeMaker size={28} />
            </div>
            <hr />
            <div className="admin-edit-info-body">
              <p className="admin-edit-info-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam vel iste adipisci ab quae repellat maxime accusamus
                vitae iusto veniam.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
