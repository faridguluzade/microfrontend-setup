import { Outlet } from "react-router-dom";
import classes from "./Content.module.css";

function Content() {
  return (
    <div className={classes.content}>
      <Outlet />
    </div>
  );
}

export default Content;
