import { NavLink } from "react-router-dom";
import Classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={Classes.header}>
      <div className={Classes.logo}>Great Quotes</div>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={Classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={Classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
