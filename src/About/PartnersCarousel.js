import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import aviva from '../images/partners/aviva.png';
import unica from '../images/partners/unica.png';
import chubb from '../images/partners/chubb.png'
import coachman from '../images/partners/coachman.png'
import economical from '../images/partners/economical.png'
import economicalSelect from '../images/partners/economicalSelect.png'
import gore from '../images/partners/gore.png'
import intact from '../images/partners/intact.png'
import optimum from '../images/partners/optimum.png'
import perth from '../images/partners/perth.png'
import rsa from '../images/partners/RSA.png'
import travelers from '../images/partners/travelers.png'
import zurich from '../images/partners/zurich.png'
import wynard from '../images/partners/wynard.png'
import pafco from '../images/partners/pafco.png'
import nautimax from '../images/partners/nautimax.png'
import globali from '../images/partners/global.png'
import encon from '../images/partners/encon.png';
import pacific from '../images/partners/pacific.png';
import echelon from '../images/partners/echelon.png';
import abex from '../images/partners/abex.png';
import premier from '../images/partners/premier.png';
import wawanesa from '../images/partners/wawanesa.png';
import jevco from '../images/partners/jevco.png';
import guarantee from '../images/partners/guarantee.png';
import chieftain from '../images/partners/chieftain.png';
import caa from '../images/partners/caa.png';
import ace from '../images/partners/ace.png';
import pembridge from '../images/partners/pembridge.png'
import liberty from '../images/partners/liberty.png';
import novex from '../images/partners/novex.png';


export default class PartnersCarousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 9,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: false,
      cssEase: 'linear',
      className: 'slides',
      lazyLoad: 'progressive'
    };
    return (
      <div id='partners'>
        <Slider {...settings}>
          <div>
            <img src={aviva} alt='aviva' />
          </div>
          <div>
            <img src={unica} alt='unica' />
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
          <div>
            <img src={zurich} alt='zurich' />
          </div>                   
          <div>
            <img src={wynard} alt='wynard' />
          </div>          
          <div>
            <img src={pafco} alt='pafco' />
          </div>          
          <div>
            <img src={nautimax} alt='nautimax' />
          </div>
          <div>
            <img src={globali} alt='globali' />
          </div>
          <div>
            <img src={encon} alt='encon' />
          </div>
          <div>
            <img src={pacific} alt='pacific' />
          </div>
          <div>
            <img src={echelon} alt='echelon' />
          </div>
          <div>
            <img src={abex} alt='abex' />
          </div>
          <div>
            <img src={premier} alt='premier' />
          </div>
          <div>
            <img src={wawanesa} alt='wawanesa' />
          </div>
          <div>
            <img src={jevco} alt='jevco' />
          </div>
          <div>
            <img src={guarantee} alt='guarantee' />
          </div>
          <div>
            <img src={chieftain} alt='chieftain' />
          </div>
          <div>
            <img src={caa} alt='caa' />
          </div>
          <div>
            <img src={pembridge} alt='pembridge' />
          </div> 
          <div>
            <img src={ace} alt='ace' />
          </div>
          <div>
            <img src={novex} alt='novex' />
          </div>
          <div>
            <img src={liberty} alt='liberty' />
          </div>

        </Slider>
        <div id='viewPartners'>
          <Link to='/partners'>See all 31 of our partners</Link>
        </div>
      </div>
    );
  }
}