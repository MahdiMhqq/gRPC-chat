import { useEffect } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { ArrowLeft2 } from "iconsax-react";
import nProgress from "nprogress";
import clsx from "clsx";

interface INavigationProps {
  className?: string;
}

function Navigation({ className }: INavigationProps) {
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
    <header
      className={clsx("p-4 pb-8 gradient-navigation drop-shadow-lg", className)}
    >
      <nav className="px-4 py-6 bg-secondary rounded-md">
        <ul className="flex items-center gap-x-3">
          <li>
            <NavLink
              to="/app"
              end
              className={({ isActive }) =>
                clsx(
                  "py-1 px-2 rounded-lg text-h5-medium transition",
                  isActive
                    ? "bg-primary text-tSecondary"
                    : "hover:bg-primary20 text-tPrimary"
                )
              }
            >
              چت روم
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/profile"
              className={({ isActive }) =>
                clsx(
                  "py-1 px-2 rounded-lg text-h5-medium transition",
                  isActive
                    ? "bg-primary text-tSecondary"
                    : "hover:bg-primary20 text-tPrimary"
                )
              }
            >
              پروفایل
            </NavLink>
          </li>
          <li className="flex items-center justify-center list-none cursor-pointer ms-auto h-7 w-7 rounded-md hover:bg-primary20 transition group">
            <Link to=".." relative="path">
              <ArrowLeft2 size="1.5rem" className="group-hover:text-tPrimary" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
