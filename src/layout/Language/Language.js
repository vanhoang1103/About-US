import { useState } from "react"
import style from "./Language.module.scss"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(style)
function Language() {
    const [open, setOpen] = useState(false) 
  return (
    <div className={cx('container')}>
        <button
        className={cx('Language_btn')}
        onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faLanguage} />
        </button>
        {open && (
            <div className={cx("dropdown")}>
                <div className={cx('language_item')}>             
                    English
                    <p>Tiếng Anh</p>
                </div>
                <hr />
                <div className={cx('language_item')}>             
                    French
                    <p>Tiếng Pháp</p>
                </div>
                <hr/>
                <div className={cx('language_item')}>             
                    Russian
                    <p>Tiếng Nga</p>
                </div>
                <hr />
               
                <div className={cx('language_item')}>             
                     Chinese
                    <p>Tiếng Trung</p>
                </div>
                <hr />
                <div className={cx('language_item')}>             
                    Korean
                    <p>Tiếng Hàn</p>
                </div>
                <hr />
                <div className={cx('language_item')}>             
                    Japanese
                    <p>Tiếng Nhật</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Language