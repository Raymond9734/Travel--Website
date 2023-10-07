import React from "react";
import './ServicesSec.css'
import Slider from "react-slick";


function ServicesSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <video src='./videos/video-1.mp4' autoPlay loop muted/>
    <h1 className="service-text">Our Services</h1>
    <Slider {...settings}>
      <div >
        <div className="img-wrapper">
        <h2>
Are you ready to escape the hustle and bustle of everyday life? Our campsite offers the perfect sanctuary for nature enthusiasts and adventure seekers alike. Nestled in the heart of pristine wilderness, our campsite promises an authentic outdoor experience like no other.</h2>
       <img src="./images/service-1.jpg" alt="Phoro"/>
       </div>
      </div>
      <div className="img-wrapper">
        <h2> New York, the iconic metropolis of dreams, beckons you to embark on an extraordinary journey through its diverse neighborhoods and iconic landmarks. Whether you're a first-time visitor or a seasoned traveler, the Big Apple promises a plethora of captivating experiences that will leave you spellbound.</h2>
       
      <img src="./images/service-2.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2> Dive into crystal-clear waters, framed by breathtaking landscapes that inspire wonder. Whether it's the idyllic charm of Lake Como, the mystical allure of Lake Baikal, or the pristine wilderness of Banff's glacial lakes, each destination offers an enchanting escape. </h2>
        <img src="./images/service-3.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2> Explore iconic landmarks like the Tower of London, Buckingham Palace, and the British Museum. Stroll along the historic streets of Covent Garden, indulge in high tea, and savor diverse culinary delights. Immerse yourself in West End theater productions, and take a scenic ride on the London Eye.</h2>

      <img src="./images/service-4.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2>Embark on a journey to the glittering heart of entertainment—Hollywood. Walk the hallowed streets where stars are born and legends are made. Experience the magic of the silver screen with studio tours and red-carpet premieres. Discover the glamour, history, and dreams that make Hollywood an unforgettable destination.</h2>

      <img src="./images/service-5.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2>Escape to Brazil's breathtaking beauty, where lush rainforests meet golden beaches. Immerse yourself in the vibrant rhythm of samba, explore the wonders of the Amazon, and witness the awe-inspiring Iguazu Falls. Indulge in Brazilian cuisine, from feijoada to caipirinhas, and celebrate life in this diverse and captivating destination.</h2>

      <img src="./images/service-6.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2>Experience the awe-inspiring panoramas that await in every corner of our world. From the majestic mountains of the Swiss Alps to the vast deserts of Namibia, we invite you to explore landscapes that will leave you breathless. Join us on an adventure to the world's most picturesque destinations.</h2>


      <img src="./images/service-7.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2>Discover the vibrant spirit of Rio de Janeiro's favelas, where culture, music, and resilience thrive. Immerse yourself in the rhythms of samba, meet the warm-hearted locals, and explore the colorful streets. Experience the authentic side of Brazil as you embark on a journey that celebrates community, art, and the indomitable human spirit</h2>

      <img src="./images/service-8.jpg" alt="Phoro"/>
      </div>
      <div className="img-wrapper">
        <h2>Explore the timeless charm of the United Kingdom, where history and innovation converge. Wander through cobblestone streets and medieval castles and embrace the modern vibrancy of cities like London and Edinburgh. </h2>

      <img src="./images/service-9.jpg" alt="Phoro"/>
        
      </div>
   
    </Slider>
   </>
  );
}

export default ServicesSlider;
