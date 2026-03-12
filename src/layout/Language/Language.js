import { useEffect, useRef, useState } from "react"
import style from "./Language.module.scss"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(style)
function Language() {
    const [open, setOpen] = useState(false) 
    const dropdownRef = useRef(null)
    useEffect(( ) => {
        const handle = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handle);
        return () => {
            document.removeEventListener("mousedown", handle)
        }
        
    }, [])
  return (
    <div className={cx('container')} ref={dropdownRef}>
        <button
        className={cx('Language_btn')}
        onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faLanguage} />
        </button>
        {open && (
            <div className={cx("dropdown")}>
                <div className={cx('language_item')} onClick={() => setOpen(false)}>             
                    English
                    <p>Tiếng Anh</p>
                </div>
                <hr />
                <div className={cx('language_item')}onClick={() => setOpen(false)}>             
                    French
                    <p>Tiếng Pháp</p>
                </div>
                <hr/>
                <div className={cx('language_item')}onClick={() => setOpen(false)}>             
                    Russian
                    <p>Tiếng Nga</p>
                </div>
                <hr />
               
                <div className={cx('language_item')} onClick={() => setOpen(false)}>             
                     Chinese
                    <p>Tiếng Trung</p>
                </div>
                <hr />
                <div className={cx('language_item')}onClick={() => setOpen(false)}>             
                    Korean
                    <p>Tiếng Hàn</p>
                </div>
                <hr />
                <div className={cx('language_item')}onClick={() => setOpen(false)}>             
                    Japanese
                    <p>Tiếng Nhật</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default Language