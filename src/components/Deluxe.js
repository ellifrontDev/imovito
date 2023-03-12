import React from 'react';
import delImg from "../img/atlantis.svg"
import {useState} from "react";

const Deluxe = () => {
    const [more,setMore] = useState(false)
    return (
        <div id="del">
            <div className="container">
                <div className="del-logo">
                    <h1>Наши лучшие инвестиционные предложения </h1>
                    <p className="del-description">Мы отобрали, проверили и рассчитали прибыльность каждого объекта</p>

                    <div className="del-blocks">
                        <div>
                            <img src={delImg} alt=""/>
                            <div className="del-block">
                                <h4>ЖК «Atlantis Deluxe»</h4>
                                <div className="del-box" >
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                </div>
                                <div className="del-title">
                                    <h4 >от 33 000 000 руб.</h4>
                                    <p>от 1 500 000 руб. за м2</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <img src={delImg} alt=""/>
                            <div className="del-block">
                                <h4>ЖК «Atlantis Deluxe»</h4>
                                <div className="del-box" >
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                </div>
                                <div className="del-title">
                                    <h4 >от 33 000 000 руб.</h4>
                                    <p>от 1 500 000 руб. за м2</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <img src={delImg} alt=""/>
                            <div className="del-block">
                                <h4>ЖК «Atlantis Deluxe»</h4>
                                <div className="del-box" >
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                </div>
                                <div className="del-title">
                                    <h4 >от 33 000 000 руб.</h4>
                                    <p>от 1 500 000 руб. за м2</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <img src={delImg} alt=""/>
                            <div className="del-block">
                                <h4>ЖК «Atlantis Deluxe»</h4>
                                <div className="del-box" >
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                    <div className="del-boxes">
                                        <h3 className="del-desc1">Доходность</h3>
                                        <p className="del-desc">65,25%</p>
                                    </div>
                                </div>
                                <div className="del-title">
                                    <h4 >от 33 000 000 руб.</h4>
                                    <p>от 1 500 000 руб. за м2</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <button style={{
                            display: more ? 'none' : 'flex'
                        }}
                        className="del-btn" onClick={ () => setMore(!more)}>Смотреть все объекты</button>

                    {
                        more ?  <div className="del-blocks " >
                            <div>
                                <img src={delImg} alt=""/>
                                <div className="del-block">
                                    <h4>ЖК «Atlantis Deluxe»</h4>
                                    <div className="del-box" >
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                    </div>
                                    <div className="del-title">
                                        <h4 >от 33 000 000 руб.</h4>
                                        <p>от 1 500 000 руб. за м2</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <img src={delImg} alt=""/>
                                <div className="del-block">
                                    <h4>ЖК «Atlantis Deluxe»</h4>
                                    <div className="del-box" >
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                    </div>
                                    <div className="del-title">
                                        <h4 >от 33 000 000 руб.</h4>
                                        <p>от 1 500 000 руб. за м2</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <img src={delImg} alt=""/>
                                <div className="del-block">
                                    <h4>ЖК «Atlantis Deluxe»</h4>
                                    <div className="del-box" >
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                    </div>
                                    <div className="del-title">
                                        <h4 >от 33 000 000 руб.</h4>
                                        <p>от 1 500 000 руб. за м2</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <img src={delImg} alt=""/>
                                <div className="del-block">
                                    <h4>ЖК «Atlantis Deluxe»</h4>
                                    <div className="del-box" >
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                        <div className="del-boxes">
                                            <h3 className="del-desc1">Доходность</h3>
                                            <p className="del-desc">65,25%</p>
                                        </div>
                                    </div>
                                    <div className="del-title">
                                        <h4 >от 33 000 000 руб.</h4>
                                        <p>от 1 500 000 руб. за м2</p>
                                    </div>

                                </div>
                            </div>
                        </div> : ''
                    }

                </div>
            </div>
        </div>
    );
};

export default Deluxe;