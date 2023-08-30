import { useEffect } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";
import nProgress from "nprogress";

function Navigation() {
  const { state } = useNavigation();

  //LIFE CYCLE HOOKS
  useEffect(() => {
    if (state === "loading") {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [state]);

  return (
    <header className={""}>
      <nav>
        <ul className={""}>
          <li>
            <NavLink to={""} className={({ isActive }) => (isActive ? "" : "")}>
              چت روم
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) => (isActive ? "" : "")}
            >
              پروفایل
            </NavLink>
          </li>
          <li>
            <Link to=".." relative="path">
              <ArrowLeft2 size="1rem" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
