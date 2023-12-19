import React from 'react';
import classNames from "classnames/bind"
import style from './SliderHeader.scss'
import Slider from 'react-slick';
import { CustomNextArrow,CustomPrevArrow } from '../../hooks/CustomArrow';
const cx = classNames.bind(style)
const SliderHeader = () => {
    var settings = {
        infinite: true, //khi chạy xong sẽ quay về ban đầu,chạy vô tận
        speed: 300,
        autoplay:true, // tự động chạy
        autoplaySpeend:2000, // thời gian chạy
        slidesToShow: 1, // hiển thị 1 
        slidesToScroll: 1, // lướt qua 1
        rtl:true, // right -> left
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    return (
        <Slider {...settings} className={cx('d-flex align-items-center')}>
            <img className={cx('slider_img')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/12/banner/OLIP15-2880-800-1920x533.png" alt="" />
            <img className={cx('slider_img')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/11/banner/iPad-9-2880-800-1920x533.png" alt="" />
            <img  className={cx('slider_img')} src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/12/banner/AWCS-2880-800-1920x548.png" alt="" />
        </Slider>
    );
}

export default SliderHeader;
