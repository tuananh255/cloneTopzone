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
                <p>{title}</p>
                <h5>{priceNew}</h5>
                <h5>{priceOld}</h5>
            </div>
        </div>
    );
}

export default ProductFlash;
