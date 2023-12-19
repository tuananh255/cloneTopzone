import React from 'react';
import classNames from "classnames/bind"
import style from './HomePage.scss'
import Layout from '../../layout/Layout/Layout';
const cx = classNames.bind(style)
const HomePage = () => {
    return (
        <Layout title={"Topzone"}>
            <div className={cx('warpper')}>
                content
                content

                content
                content
                content

            </div>
        </Layout>
    );
}

export default HomePage;
