import React from 'react';
import Slider from 'react-slick';
import aviva from '../images/partners/aviva.png';
import chubb from '../images/partners/chubb.png'
import coachman from'../images/partners/coachman.png'
import economical from '../images/partners/economical.png'
import economicalSelect from '../images/partners/economicalSelect.png'
import gore from '../images/partners/gore.png'
import intact from '../images/partners/intact.png'
import optimum from '../images/partners/optimum.png'
import perth from '../images/partners/perth.png'
import rsa from '../images/partners/RSA.png'
import travelers from '../images/partners/travelers.png'



export default class Partners extends React.Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover: false,
        centerMode: true,
        cssEase: 'linear',
        className: 'slides',
        lazyLoad: 'progressive'
      };
      return (
        <Slider {...settings}>
          <div>
            <img src={aviva} alt='aviva' />
          </div>
          <div>
            <img src={chubb} alt='chubb' />
          </div>
          <div>
            <img src={coachman} alt='coachman' />
          </div>
          <div>
            <img src={economical} alt='economical' />
          </div>
          <div>
            <img src={economicalSelect} alt='economicalSelect' />
          </div>
          <div>
            <img src={gore} alt='gore' />
          </div>
          <div>
            <img src={intact} alt='intact' />
          </div>
          <div>
            <img src={optimum} alt='optimum' />
          </div>
          <div>
            <img src={perth} alt='perth' />
          </div>
          <div>
            <img src={travelers} alt='travelers' />
          </div>
          <div>
            <img src={rsa} alt='rsa' />
          </div>
        </Slider>
      );
    }
  }