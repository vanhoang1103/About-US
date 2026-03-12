import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Logos } from "~/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCompass, faTools } from "@fortawesome/free-solid-svg-icons";
import Menu from "~/layout/Menu";
import Language from "~/layout/Language/Language";
import Search from "~/layout/Search/Search";

const cx = classNames.bind(styles);

function Homes() {
  const menuItems = [
    { name: "Tìm chỗ ở", icon: faHouse, path: "/" },
    { name: "Trải nghiệm", icon: faCompass, path: "/experiences" },
    { name: "Dịch vụ", icon: faTools, path: "/services" },
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("header_after")}>
        <div className={cx("header")}>
          <div className={cx("logo")}>
            <Logos width="6rem" height="6rem" />
          </div>
          <div className={cx("menu")}>
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={(navData) => {
                  if (navData.isActive) {
                    return cx("menu_item", "active");
                  } else {
                    return cx("menu_item");
                  }
                }}
              >
                {({ isActive }) => (
                  <>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={cx("icon", { active: isActive })}
                    />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className={cx("language")}>
            <h2>
              {" "}
              <Language />{" "}
            </h2>
            <h2>
              {" "}
              <Menu />
            </h2>
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default Homes;
