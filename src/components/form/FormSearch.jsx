import React from 'react';
import classNames from "classnames/bind"
import style from './FormSearch.scss'
import { Link } from 'react-router-dom';
const cx = classNames.bind(style)
const FormSearch = ({setSearchTonggle}) => {
    return (
        <div className={cx('main')}>
            <div className={cx('form_search header_row d-flex align-items-center justify-content-between')}>
                <div style={{background:"#101010"}} className={cx('search_btn')} onClick={()=>setSearchTonggle(false)}>
                    <i className={cx('fa-solid fa-magnifying-glass icon')}></i>
                </div>
                <div className="search_input">
                    <input type="text" placeholder='Tìm kiến sản phẩm ...'/>
                </div>
                <div style={{background:"#101010"}} className={cx('close_btn')} onClick={()=>setSearchTonggle(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className={cx('dropdown_search')}>
                <div className={cx('search_title')}>
                    <p className={cx('search_title_p')}>Có phải bạn muốn tìm</p>
                    <div className={cx('list_search')}>
                        <div className={cx('search_item')}>
                            <Link to='/' className={cx('Link')}>
                                <span>iPhone 14 (Plus,Pro,Pro Max)</span>
                            </Link>
                        </div>
                        <div className={cx('search_item')}>
                            <Link to='/' className={cx('Link')}>
                                <span>iPhone 14 (Plus,Pro,Pro Max)</span>
                            </Link>
                        </div>
                        <div className={cx('search_item')}>
                            <Link to='/' className={cx('Link')}>
                                <span>iPhone 14 (Plus,Pro,Pro Max)</span>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('samira')}>
                        <p className={cx('title_samira')}>Sản phẩm gợi ý</p>
                        <ul className={cx('list_samira')}>
                            <li className={cx('item_samira')}>
                                <Link to='/' className={cx('Link_samira')}>
                                    <div className={cx('d-flex align-items-center')}>
                                        <div className={cx('item_img')}>
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/289663/s16/iphone-14-blue-thumbtz-650x650.png" alt="" />
                                        </div>
                                        <div className={cx('description')}>
                                            <p>iPhone 14 256GB</p>
                                            <div className={cx('d-flex price align-items-center')}>
                                                <h5>22.090.000đ</h5>
                                                <p>22.090.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('item_samira')}>
                                <Link to='/' className={cx('Link_samira')}>
                                    <div className={cx('d-flex align-items-center')}>
                                        <div className={cx('item_img')}>
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/210644/s16/iphone-11-black-thumbtz-650x650.png" alt="" />
                                        </div>
                                        <div className={cx('description')}>
                                            <p >iPhone 14 256GB</p>
                                            <div className={cx('d-flex price align-items-center')}>
                                                <h5>22.090.000đ</h5>
                                                <p>22.090.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('item_samira')}>
                                <Link to='/' className={cx('Link_samira')}>
                                    <div className={cx('d-flex align-items-center')}>
                                        <div className={cx('item_img')}>
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone-14-purple-thumbtz-650x650.png" alt="" />
                                        </div>
                                        <div className={cx('description')}>
                                            <p>iPhone 14 256GB</p>
                                            <div className={cx('d-flex price align-items-center')}>
                                                <h5>22.090.000đ</h5>
                                                <p>22.090.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className={cx('item_samira')}>
                                <Link to='/' className={cx('Link_samira')}>
                                    <div className={cx('d-flex align-items-center')}>
                                        <div className={cx('item_img')}>
                                            <img src="https://cdn.tgdd.vn/Products/Images/42/210644/s16/iphone-11-black-thumbtz-650x650.png" alt="" />
                                        </div>
                                        <div className={cx('description')}>
                                            <p >iPhone 14 256GB</p>
                                            <div className={cx('d-flex price align-items-center')}>
                                                <h5>22.090.000đ</h5>
                                                <p>22.090.000đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSearch;
