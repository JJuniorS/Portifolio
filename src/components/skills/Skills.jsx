import React, { Component } from 'react';
import Slider from "react-slick";
import style from './styles.module.scss';

import cSharp from '../../images/logoCSharp.svg';
import javascriptImg from '../../images/javascript.png';
import sqlImg from '../../images/sql.svg';
import jqueryImg from '../../images/jquery.png';
import reactImg from '../../images/react.png';

export default class Skills extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 2000,
            cssEase: "linear"
        };

        const imagens = [cSharp, javascriptImg, sqlImg, jqueryImg, reactImg];

        return (
            <div className='skillBody'>
                <Slider {...settings}>
                    {
                        imagens.map(imagem => (
                            <div className={style.logoImg} key={imagem}>
                                <img alt='' src={imagem} className={style.imageSkill} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        )
    }
}
