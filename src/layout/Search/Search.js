import React from 'react'
import classNames from 'classnames/bind'
import style from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(style)
function Search() {
  return (
    <div className={cx('header_search')}>
                <div className={cx('header_search_i')}>
                    <button className={cx('header_search_items')}>
                        <div className={cx('header_search_content')}>Địa điểm</div>
                        <div className={cx('header_search_input')}>
                          <input type="text" placeholder="Tìm kiếm điểm đến"  className={cx('header_search_input_1')}/>
                        </div>
                    </button>
                    <button className={cx('header_search_items')}>
                        <div className={cx('header_search_content')}>Thời gian</div>
                        <div className={cx('header_search_content_1')}>Thêm ngày</div>
                    </button>
                    <button className={cx('header_search_items','header_search_icon')}>
                        <div className={cx('item_1')}>
                          <div className={cx('header_search_content')}>Khách</div>
                          <div className={cx('header_search_content_1')}>Thêm Khách</div>
                        </div>
                        <div className={cx('item_2')}>
                          <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                        </div>
                    </button>
                </div>
            </div>
  )
}

export default Search