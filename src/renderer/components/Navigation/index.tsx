import { NavLink } from "react-router-dom";

import "./style.scss"

const Navigation = () => {
  return (
    <div className={"navigation"}>
      <NavLink exact to={"/"} className={isActive => isActive ? "activeLink" : ""}><i className={"fas fa-home"} /></NavLink>
      <NavLink to={"/food"} className={isActive => isActive ? "activeLink" : ""}><i className={"fas fa-apple-alt"} /></NavLink>
    </div>
  );
};

export default Navigation;
