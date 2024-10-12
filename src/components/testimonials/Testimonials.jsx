import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
    {
      id: 1,
      image: Image4,
      title: "Riza Wasik",
      subtitle: "Branch Head @ QSpiders and JSpiders",
      comment:
        "Shivam Chauhan consistently impressed us during his training with his comprehensive skill set. He quickly became our go-to person for handling challenging tasks across multiple areas, from backend development to testing, demonstrating problem-solving abilities and a strong technical foundation.",
    },
    {
      id: 2,
      image: Image3,
      title: "Niraj Singhal",
      subtitle: "Director @ SCRIET, CCS University",
      comment:
        "Shivam Chauhan was a highly motivated and skilled student, consistently demonstrating strong technical abilities and adaptability. His problem-solving mindset and dedication made him stand out during his time here.",
    },
  ];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials