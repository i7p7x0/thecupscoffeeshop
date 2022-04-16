import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { authenticationReducer } from "../stores/reducers/Authentication";
import { useSelector } from "react-redux";
import Header from "../layouts/header/Header";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menu from "../pages/menu/Menu";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import Error from "../pages/error/Error";
import "./App.css";

const App = () => {
  const rootReducer = combineReducers({
    authentication: authenticationReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route path="/error" exact element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
