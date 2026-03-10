import { faBars, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import style from "./Menu.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(style)
function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('menu_container')}>
      <button 
        className={cx("menu_btn")}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>
      {open && (
        <div className={cx("dropdown")}>
          <div className={cx("menu_item")}>
            <FontAwesomeIcon icon={faQuestion} className={cx('icon')}/>
            Trung tâm trợ giúp 
          </div>
          <hr />
          <div className={cx("menu_item")}>
            <div> <b>Trở thành host</b> </div>
          </div>
          <hr />
          <div className={cx("menu_item")}>Giới thiệu host</div>
          <div className={cx("menu_item")}>Tìm host hỗ trợ</div>
          <hr />
          <div className={cx("menu_item")}>Đăng nhập hoặc đăng ký</div>
        </div>
      )}
      
    </div>
  );
}

export default Menu;