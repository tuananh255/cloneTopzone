import React from 'react';
import classNames from 'classnames/bind';
import style from './Layout.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Helmet} from 'react-helmet'

const cx  = classNames.bind(style)
const Layout = ({children,title,description,keywords,author}) => {
    
    
    return (
        <div style={{background:"#3e3e3f"}}>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta  name='keywords' content={keywords}/>
                <meta  name='author' content={author}/>
                <title>{title}</title>
            </Helmet>
            <div>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>

            </div>
        </div>
    );
}

Layout.defaultProps = {
    title : 'Topzone app',
    description : "My project",
    keywords : "React js, node, mongoodb",
    author : "Anh Tuấn"
}

export default Layout;
