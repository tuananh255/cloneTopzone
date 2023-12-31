import React from 'react';
import classNames from "classnames/bind"
import style from './HomePage.scss'
import Layout from '../../layout/Layout/Layout';
import Slider from "react-slick";
import { CustomNextArrow,CustomPrevArrow } from '../../hooks/CustomArrow';
import SliderHeader from '../../Tippy/SliderHeader/SliderHeader';
import ProductFlash from '../../Tippy/ProductFlash/ProductFlash';
import { Link } from 'react-router-dom';
import BoxSlide from '../../Tippy/BoxSlide/BoxSlide';
const cx = classNames.bind(style)

const tab=[
    {path:'iphone',title:"iPhone",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png"},
    {path:'mac',title:"Mac",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png"},
    {path:'ipad',title:"iPad",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png"},
    {path:'iph',title:"Watch",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png"},
    {path:'iphone',title:"Âm thanh",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Amthanh_Desktop.png"},
    {path:'iphone',title:"Phụ kiện",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/PK_Desktop.png"},
]
const flash = [
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290326/s16/op-lung-magsafe-iphone-14-pro-max-nhua-trong-apple-mpu73-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"20"
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290326/s16/op-lung-magsafe-iphone-14-pro-max-nhua-trong-apple-mpu73-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"22"
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/60/290321/s16/op-lung-magsafe-iphone-14-pro-nhua-trong-apple-mpu63-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ", 
        sell:"30"
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/9118/238123/s16/TimerThumb/apple-tv-4k-32gb-mxgy2-(1).png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ", 
        sell:"2"  
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/12979/251656/s16/chan-sac-world-travel-adapter-kit-apple-md837-thumb-1-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"10"
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289700/s16/iphone-14-pro-max-purple-thumbtz-650x650.png" ,
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"15"
    },
    {
        img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/54/290053/s16/airpods-3-hop-sac-khong-day-thumb-650x650.png",
        title:"Ốp lưng iphone 14 pro max",
        priceNew : "10.000.000đ",   
        priceOld : "10.000.000đ",   
        sell:"19"
    },
]
const iphone = [
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-blue-thumbtz-1-650x650.png',
        title:'iPhone 15 Plus 128GB',
        priceNew : '25.000.000đ',
        priceOld : '25.550.000đ',
        sell : '',
        free : "Online giá rẻ"
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/299033/s16/iphone-15-pro-blue-thumbtz-650x650.png',
        title:'iPhone 15 Pro 128GB',
        priceNew : '28.000.000đ',
        priceOld : '30.550.000đ',
        sell : '2',
        free : ""
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/223602/s16/iphone-13-pink-thumbtz-650x650.png',
        title:'iPhone 11 68GB',
        priceNew : '25.000.000đ',
        priceOld : '25.550.000đ',
        sell : '',
        free : "Online giá rẻ"
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-black-thumbtz-650x650.png',
        title:'iPhone 14 Pro 128GB',
        priceNew : '25.120.000đ',
        priceOld : '27.000.000đ',
        sell : '7',
        free : ""
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/281570/s16/iphone-15-black-thumbtz_0-650x650.png',
        title:'iPhone 15 128GB',
        priceNew : '21.000.000đ',
        priceOld : '20.550.000đ',
        sell : '4',
        free : ""
    },
]
const mac = [
    {
        path : '/',
        new:"Mới",
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/318230/s16/mac-topzone-promax-black-650x650.png',
        title:'MacBook Pro 14 inch M3 2023',
        priceNew : '39.000.000đ',
        priceOld : '',
        sell : '',
        free : ""
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/318232/s16/mac-topzone-promax-black-650x650.png',
        title:'MacBook Pro 14 inch M3 Max 2023',
        priceNew : '79.550.000đ',
        priceOld : '',
        sell : '',
        free : "Hàng sắp về"
    },
    {
        path : '/',
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/318233/s16/mac16-topzone-black-650x650.png',
        title:'MacBook 16 inch M3 Pro 2023',
        priceNew : '64.000.000đ',
        priceOld : '',
        sell : '',
        free : ""
    },
    {
        path : '/',
        new:"Mới",
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/5698/238053/s16/imac-24-xanh-fix-650x650.png',
        title:'iPhone 14 Pro 128GB',
        priceNew : '25.120.000đ',
        priceOld : '27.000.000đ',
        sell : '7',
        free : ""
    },
    {
        path : '/',
        new:"Mới",
        image:'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/44/309016/s16/mac-air-15-m2-xam-650x650.png',
        title:'iMac 24 inch M1 2021',
        priceNew : '31.000.000đ',
        priceOld : '34.550.000đ',
        sell : '8',
        free : ""
    },
]
const HomePage = () => {
    var settings = {
        infinite: true, //khi chạy xong sẽ quay về ban đầu,chạy vô tận
        speed: 300,
        autoplay:true, // tự động chạy
        autoplaySpeend:2000, // thời gian chạy
        slidesToShow: 6, // hiển thị 1 
        slidesToScroll: 3, // lướt qua 1
        rtl:true, // right -> left
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    return (
        <Layout title={"Topzone - Cửa hàng Apple chính hãng"}>
            <div className={cx('warpper')}>
                <div className={cx('slider_header')}>
                    <SliderHeader/>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content_flash')}>
                        <div className={cx('title_flash d-flex align-items-center justify-content-around')}>
                            <div className={cx('logo_flash d-flex align-items-center')}>
                                <div style={{width:"496px",height:"105px"}}/>
                                <div className={cx('kq_flash ')}>
                                    <h5>Kết thúc trong</h5>
                                    <span className={cx('flash_hour')}>09</span>
                                    <span>:</span>
                                    <span className={cx('flash_hour')}>40</span>
                                    <span>:</span>
                                    <span className={cx('flash_hour')}>07</span>
                                </div>
                            </div>
                            <div className={cx('sell_flash d-flex align-items-center justify-content-between')}>
                                <div className="item1">
                                    <p>Đang diễn ra</p>
                                    <h5>08:00 - 23:59</h5>
                                </div>
                                <div className="item1">
                                    <p>Ngày mai</p>
                                    <h5>08:00 - 23:59</h5>
                                </div>
                            </div>
                        </div>
                        <div className={cx('list_product_flash')}>
                            {
                                <Slider {...settings} className={cx('d-flex align-items-center justify-content-between')}>
                                    {
                                        flash.map((e,index)=>(
                                            <ProductFlash 
                                                key={index}
                                                img={e.img} 
                                                title={e.title} 
                                                priceNew={e.priceNew} 
                                                priceOld={e.priceOld}
                                                sell={e.sell}/>
                                        ))
                                    }
                                </Slider>
                            }
                        </div>  
                    </div>
                    <div className={cx('list_tabBox d-flex align-items-center justify-content-between')}>
                        {
                            tab.map((e,index)=>(
                                <div key={index} className={cx('item_tabBox')}>
                                    <Link to={e.path} className={cx('item_tabBox_Link')}>
                                        <div className={cx('item_tabBox_page')}>
                                            <img className={cx('item_tabBox_img')} src={e.img} alt={e.title} />
                                        </div>
                                        <p className={("item_tabBox_title")}>{e.title}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx('main_box')}>
                        <BoxSlide title={"iPhone"} data={iphone}/>
                        <BoxSlide title={"Mac"} data={mac}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
