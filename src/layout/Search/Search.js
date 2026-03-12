import classNames from 'classnames/bind'
import style from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState , useRef , useEffect  } from "react";


const cx = classNames.bind(style)
function Search() {
  const [open,setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef(null);
  const handleLocationClick = (name, image) => {
    setSearch(name); 
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const locations = [
        {
          name: "Lân cận",
          description: "Tìm xung quanh bạn",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/ea5e5ee3-e9d8-48a1-b7e9-1003bf6fe850.png"
        },
        {
          name: "Hà Nội",
          description: "Vì danh sách yêu thích của bạn có chỗ ở tại Hà Nội",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/329ccc15-0444-469c-ac22-ae283716b672.png"
        },
        {
          name: "Vũng Tàu",
          description: "Vì danh sách yêu thích của bạn có chỗ ở tại Vũng Tàu",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/fa32e243-625d-486b-80d2-0a1bd74e214f.png"
        },
        {
          name: "Đà Lạt,Lâm Đồng",
          description: "Phù hợp cho người yêu thiên nhiên",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/73966157-d937-494f-858b-962da9f24e8a.png"
        },
        {
          name: "Đà Nẵng",
          description: "Vì danh sách yêu thích của bạn có chỗ ở tại Đà Nẵng",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png"
        },
        {
          name: "Bangkok,Thái Lan",
          description: "Có các thắng cảnh như Hoàng cung lớn",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/2ddfa4b7-298d-4c4a-95d1-dacb51ac741a.png"
        },
        {
          name: "Phan Thiết,Bình Thuận",
          description: "Phù hợp cho người yêu thiên nhiên",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/fa32e243-625d-486b-80d2-0a1bd74e214f.png"
        },
        {
          name: "Melbourne,Úc",
          description: "Có thắng cảnh như Tháp Eureka",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/211e68a7-757c-4705-a2a1-a4036ba7e7bf.png"
        },
        {
         name: "Thành Phố Huế",
          description: "Có kiến trúc ấn tượng, nhiều đặc sản ngon",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/836b8df4-a0fd-491c-91ad-006a767db97a.png"
        },
        {
          name: "Hội An",
          description: "Có ẩm thực đỉnh cao, nơi lý tưởng để chụp ảnh",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png"
        },
        {
          name: "Quy Nhơn,Bình Định",
          description: "Một địa điểm thú vị",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/ab47aaeb-3db7-4d77-8e3d-a95c74eb81fa.png"
        },
        {
          name: "Quảng Trị",
          description: "Phù hợp cho người yêu thiên nhiên",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/265e233c-2fbc-43f9-b101-d92c96750e31.png"
        },
        {
          name: "Nha Trang",
          description: "Nơi có nhiều bãi biển đẹp nhất Việt Nam",
          image: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-2/original/1e6621dc-6bb6-42c3-a65a-ac9acf89703f.png"
        }
  ];


  
  return (
    <div className={cx('header_search')} ref={dropdownRef}>
                <div className={cx('header_search_i')}>
                    <button 
                    className={cx('header_search_items','header_search_btn')}
                    onClick={() => setOpen(!open)}
                    >
                        <div className={cx('header_search_content')}>Địa điểm</div>
                        <div className={cx('header_search_input')}>
                          <input 
                          type="text" 
                          value={search}
                          onChange={(e) => setSearch(e.target.value)} 
                          placeholder="Tìm kiếm điểm đến"  
                          className={cx('header_search_input_1')}/>
                        </div>
                    </button>
                    {open && (
                      <div className={cx("Search_down")}>
                          <h4 className={cx('Search_down_h')}>Điểm đến được đề xuất</h4>
                          {locations.map((location, index) => (
                            <div key={index} className={cx('Search_down_items')} onClick={() => handleLocationClick(location.name, location.image)}>
                              <div>
                                <img className={cx('img')} alt={location.name} src={location.image} />
                              </div>
                              <div className={cx('Search_down_content')}>
                                <h2 className={cx('Search_down_content_1')}>{location.name}</h2>
                                <h2 className={cx('Search_down_content_2')}>{location.description}</h2>
                              </div>
                            </div>
                          ))}
                        </div>
                    )}
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