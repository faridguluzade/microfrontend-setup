import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes["sidebar-list"]}>
        <li className={classes["sidebar-item"]}>
          <a className={classes["sidebar-link"]} href="/categories">
            Categories
          </a>
        </li>
        <li className={classes["sidebar-item"]}>
          <a className={classes["sidebar-link"]} href="/vacancies">
            Vacancies
          </a>
        </li>
        <li className={classes["sidebar-item"]}>
          <a className={classes["sidebar-link"]} href="/companies">
            Companies
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
