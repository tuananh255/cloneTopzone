import React from 'react';
import classNames from "classnames/bind"
import style from './ProductFlash.scss'
const cx = classNames.bind(style)

const ProductFlash = ({img,title,priceNew,priceOld,sell}) => {
    return (
        <div className={cx('product_flash')} >
            <div className={cx('ima_product')} height="195px">
                <img width="170px" height="170px" src={img} alt={title} />
            </div>
            <div className={cx('description_product text-center')} >
                <p className={cx('description_product_title')}>{title}</p>
                <h5 className={cx('description_product_new')}>{priceNew}</h5>
                <span className={cx('description_product_old')}>
                    <label>
                        {priceOld} 
                    </label>
                    <small className={cx('description_product_sell')}>-{sell}%</small>
                </span>
            </div>
        </div>
    );
}

export default ProductFlash;
