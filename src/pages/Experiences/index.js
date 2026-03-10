import { NavLink } from "react-router-dom"; // dùng NavLink để tự active
import classNames from "classnames/bind";
import styles from "./Experiences.module.scss";
import { Logos } from "~/Icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faTools } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Experiences() {
    const menuItems = [
        { name: "Tìm chỗ ở", icon: faHouse, path: "/" },
        { name: "Trải nghiệm", icon: faCompass, path: "/experiences" },
        { name: "Dịch vụ", icon: faTools, path: "/services" },
    ];

    return (
        <div>
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
                                        className={cx("icon", { active: isActive })} // ✅ dùng isActive từ NavLink
                                    />
                                    <span>{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
                <div className={cx("language")}>
                    <h2>Trở thành host</h2>
                    <h2>🌐</h2>
                    <h2>☰</h2>
                </div>

            </div>
        </div>
    );
}

export default Experiences;