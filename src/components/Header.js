import React from 'react';
import logo from '../img/imovito.svg'
import {MdOutlinePhoneInTalk} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header-logo">
                    <img src={logo} alt=""/>
                    <div className="header-nav">
                        <a href="">Главная</a>
                        <a href="">Купить</a>
                        <a href="">О нас</a>
                        <a href="">Контакты</a>
                        <a href=""> <span><MdOutlinePhoneInTalk/></span> +7(800) 987 6543</a>
                        <span><IoMdContact/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;