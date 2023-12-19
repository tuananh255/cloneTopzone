import React, {useState } from 'react';
import classNames from "classnames/bind"
import { Link } from 'react-router-dom';
import style from './Header.scss'
import Logo_Apple from '../../../image/Logo_Apple.png'
import Logo_topzone from '../../../image/logo_topzone.png'
import FormSearch from '../../form/FormSearch';
const cx = classNames.bind(style)
const tab=[
    {path:'/iphone',title:"iPhone"},
    {path:'/mac',title:"Mac"},
    {path:'/ipad',title:"iPad"},
    {path:'/watch',title:"Watch"},
    {path:'/am-thanh',title:"Âm thanh"},
    {path:'/phu-kien',title:"Phụ kiện"},
    {path:'/tekzone',title:"TekZone"},
    {path:'/topcare',title:"TopCare"},
]
const Header = () => {
    const [searchToggle,setSearchTonggle] = useState(false)
    return (
        <header id='header'>
            <div className={cx("wrapper")}>
                <div style={{width:"1200px"}} className={cx('header_container d-flex align-items-center justify-content-between')}>
                    {
                        searchToggle == false ? (
                        <>
                        <div className={cx('header_row')}>
                            <Link to='/' className='header_logo_Link logo'>
                                <img src={Logo_topzone} alt="Logo" className={cx('img_logo')} />
                            </Link>
                            <Link to='/' className='header_logo_Link'>
                                <img src={Logo_Apple} alt="Logo apple" className={cx('img_logoApple')} />
                            </Link>
                        </div>
                        <div className={cx('header_row')} style={{width:"65%"}}>
                            <ul className={cx('d-flex align-items-center justify-content-around ul_header_tab ')}>
                                {
                                    tab.map((e,index)=>(
                                        <li key={index} className={cx('li_header_tab')}>
                                            <Link to={e.path} className={cx('menu_header')}>
                                                <span>{e.title}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={cx('header_row d-flex align-items-center')}>
                            <div className={cx('search_btn')} onClick={()=>setSearchTonggle(true)}>
                                <i className={cx('fa-solid fa-magnifying-glass icon')}></i>
                            </div>
                            <div className={cx('cart_btn')}>
                                <i className={cx('fa-solid fa-cart-shopping fa-beat icon')}></i>
                            </div>
                        </div>
                        </>
                        ) :(
                            <FormSearch setSearchTonggle={setSearchTonggle}/>
                        )
                    }

                </div>
                {
                    searchToggle && (<div className={cx('tran')} id='tran' onClick={()=>setSearchTonggle(false)}></div>)
                }
            </div>
        </header>
    );
}

export default Header;
