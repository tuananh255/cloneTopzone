import React from 'react';
import classNames from "classnames/bind"
import style from './BoxSlide.scss'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../../hooks/CustomArrow';
const cx = classNames.bind(style)
const BoxSlide = ({title,data}) => {
    var settings = {
        infinite: true, //khi chạy xong sẽ quay về ban đầu,chạy vô tận
        speed: 300,
        autoplay:true, // tự động chạy
        autoplaySpeend:2000, // thời gian chạy
        slidesToShow: 4, // hiển thị 1 
        slidesToScroll: 2, // lướt qua 1
        rtl:true, // right -> left
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };
    return (
        <div className={cx('warpper_boxSlide')}>
            <div className={cx('boxslide_title')}>
                <Link className={cx('boxslide_link d-flex align-items-center justify-content-center')}>
                    <i class="fa-brands fa-apple" style={{fontSize:"2.5rem",marginRight:"8px"}}></i>
                    <h3 className={cx('boxslide_link_title')}>{title}</h3>
                </Link>
            </div>
            <div className={cx('list_productBox')}>
                <Slider {...settings} className={cx('d-flex align-items-center justify-content-between')}>
                    {
                        data.map((e,index)=>(
                            <div className={cx('item_productBox')} key={index}>
                                <div className={cx('productBox')}>
                                    <label className={cx(`no-label ${e.new && 'label'}`)}>{e.new}</label>
                                    <div className={cx('img_slideBox')}>
                                        <img width="250px" height="250px" src={e.image} alt="" />
                                    </div>
                                    <Link to={e.path}>
                                        <div className={cx('discription_box')}>
                                            <h5 className={cx('discription_box_title')}>{e.title}</h5>
                                            <div className={cx('price_box')}>
                                                <span>
                                                    {e.priceNew}
                                                    <strike>{e.priceOld}</strike>
                                                    <small>-{e.sell}%</small>
                                                </span>
                                                <p className={cx('orange')}>{e.free}</p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default BoxSlide;
