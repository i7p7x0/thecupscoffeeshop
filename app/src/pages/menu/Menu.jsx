import { React, useState, useEffect } from "react";
import useGetAPICall from "../../hooks/useGetAPICall";
import Card from "../../components/card/Card";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import "./menu.css";

import { GiCoffeeCup, GiHealthPotion, GiSlicedBread } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";
const Menu = (props) => {
  const [menu, setMenu] = useState([]);
  const [responseLoaded, setResponseLoaded] = useState(false);

  useGetAPICall("menu", setMenu, setResponseLoaded);

  const maxMenuItemLength = 40;

  const generateDottedLines = (itemLength, priceLength) => {
    let dottedLines = ".";

    for (let i = 0; i < maxMenuItemLength - (itemLength + priceLength); i++) {
      dottedLines = dottedLines + ".";
    }
    return dottedLines;
  };

  return (
    <>
      {responseLoaded ? (
        <div className="menu">
          <h2>We serve</h2>
          <div className="menu-container">
            {menu.map((m) => {
              return (
                <div className="menu-child" key={m._id}>
                  <Card key={m._id}>
                    <div className="menu-header">
                      <h4 className="menu-category-header">{m.category}</h4>
                      <span>
                        {m.category === "Hot Beverages" ? (
                          <GiCoffeeCup size={32} />
                        ) : m.category === "Iced Beverages" ? (
                          <FaCocktail size={32} />
                        ) : m.category === "Refresher" ? (
                          <GiHealthPotion size={32} />
                        ) : m.category === "Food" ? (
                          <GiSlicedBread size={32} />
                        ) : null}
                      </span>
                    </div>
                    <hr />
                    <ul>
                      {m.items.map((item) => {
                        return (
                          <li key={item._id}>
                            <span className="menu-item-name">{item.name}</span>
                            <span className="menu-item-dots">
                              {generateDottedLines(
                                item.name.length,
                                item.price.length
                              )}
                            </span>
                            <span className="menu-item-price">
                              {item.price}
                            </span>
                            <span className="menu-item-slash">/-</span>
                          </li>
                        );
                      })}
                    </ul>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Menu;
