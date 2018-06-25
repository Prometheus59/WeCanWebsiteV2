import React from 'react'
import Slider from 'react-slick'

import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../node_modules/slick-carousel/slick/slick.css"


class SimpleSlider extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      className: 'carouselSlides',
      centerMode: true,
      centerPadding: '20px',
      fade: true,
      pauseOnHover: true
    }
    return (
      <Slider {...settings}>
        <div>
          <h2>Auto Insurance</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro repudiandae culpa corporis explicabo dolor quidem nobis, iusto deserunt pariatur, amet quos tempora corrupti quisquam asperiores. Qui vitae accusantium numquam error ut expedita unde. Nam natus impedit quis consequuntur eum.</h4>
        </div>
        <div>
          <h2>Home Insurance</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem veritatis id cum sed, earum odit inventore ad iure? A pariatur praesentium fugiat aspernatur? Illum modi ratione magni amet consequatur veritatis, harum dicta sit obcaecati, voluptas, sint rem magnam pariatur reiciendis quae? Soluta repellat, officia unde a ab eligendi porro.</h4>
        </div>
        <div>
          <h2>Commercial Insurance</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex in esse rem reiciendis reprehenderit dignissimos odio ea officiis quod quam, sunt facere obcaecati, error placeat est adipisci, modi temporibus magnam culpa tenetur? Qui, iure, nesciunt, magni cum libero ratione modi incidunt ipsum non sequi minima cupiditate exercitationem. Ratione similique soluta quos aliquam facere accusantium recusandae enim perspiciatis nostrum qui vel inventore, error ea quibusdam quod blanditiis harum eos mollitia praesentium maxime, odit laboriosam architecto! Magni eligendi in deleniti sunt saepe?</h4>
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider;