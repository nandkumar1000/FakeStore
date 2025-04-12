import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // You can use any other React icons too
import './Testinomial.css'; // Make sure to style your component

const Testinomial = () => {
  // Sample testimonials from personalities
  const testimonials = [
    {
      name: 'Shah Rukh Khan',
      image: 'https://media.gettyimages.com/id/2025315849/photo/topshot-bollywood-actor-shah-rukh-khan-performs-for-the-opening-ceremony-of-2024-womens.jpg?s=612x612&w=0&k=20&c=WOdzMfrv_qWZYoKXvJHjyhiP4wvm1ItvI7lItueGTVY=',
      text: 'I love wearing this brand. It’s stylish, comfortable, and perfect for my busy life!',
      role: 'Actor, Entrepreneur',
    },
    {
      name: 'Aamir Khan',
      image: 'https://media.gettyimages.com/id/97735052/photo/new-delhi-india-aamir-khan-and-asin-thottukmal-get-ready-to-cut-aamirs-birthday-cake-at-the.jpg?s=612x612&w=0&k=20&c=cNQiyfjcN7mntswFu9SFP5BDaEticAoG6TI_fAZ9Bpw=',
      text: 'This brand fits my personality perfectly, and I’m proud to endorse it.',
      role: 'Actor, Producer',
    },
    {
      name: 'Priyanka Chopra',
      image: 'https://media.gettyimages.com/id/1486935157/photo/new-york-new-york-priyanka-chopra-jonas-attends-the-2023-met-gala-celebrating-karl-lagerfeld.jpg?s=612x612&w=0&k=20&c=9nVSQWjXCF8s9chg6bGVkeRqCxteh2lufQX-PW1QSL8=',
      text: 'Whether on set or off, this brand makes me feel confident and fashionable.',
      role: 'Actress, Singer',
    },

  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop of the carousel
    speed: 500, // Speed of slide transition
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between slides
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Celebrity Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-text">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-quote">
                <FaStar className="testimonial-icon" />
                {testimonial.text}
                <FaStar className="testimonial-icon" />
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testinomial;
