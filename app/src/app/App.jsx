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
import Error from "../pages/error/Error";
// admin components
import Dashboard from "../pages/admin/pages/dashboard/Dashboard";
import EditInfo from "../pages/admin/pages/edit/EditInfo";
import EditMenu from "../pages/admin/pages/edit/EditMenu";
import EditPassword from "../pages/admin/pages/edit/EditPassword";
import routes from "../constants/routes";


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
            <Route path={routes.all} element={<Home />} />
            <Route path={routes.home} exact element={<Home />} />
            <Route path={routes.about} exact element={<About />} />
            <Route path={routes.menu} exact element={<Menu />} />
            <Route path={routes.login} exact element={<Login />} />
            <Route path={routes.error} exact element={<Error />} />
            {/* admin routes */}
            <Route path={routes.adminDashboard} exact element={<Dashboard />} />
            <Route path={routes.adminEditInfo} exact element={<EditInfo />} />
            <Route path={routes.adminEditMenu} exact element={<EditMenu />} />
            <Route
              path={routes.adminEditPassword}
              exact
              element={<EditPassword />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
