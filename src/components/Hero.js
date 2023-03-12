import React from 'react';
import heroImg from '../img/Group 48095979.svg'

const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <div className="hero-logo">
                    <div>
                        <h1>Imovito-платформа для <br/> инвестиций в недвижимости </h1>
                        <p>Доходность до 35%, низкие риски, обьективная аналитика</p>
                        <div className="hero-title">
                            <h4>Все</h4>
                            <h4>Аппартаменты</h4>
                            <h4>Дом</h4>
                            <h4>Земля</h4>
                            <h4>Квартира</h4>
                            <h4>Коммерческая</h4>
                        </div>
                        <input type="" placeholder="Что ищете?" className="hero-input"/>
                    </div>

                    <div>
                        <img src={heroImg} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Hero;