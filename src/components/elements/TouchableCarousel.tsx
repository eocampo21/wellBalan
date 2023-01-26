import React from 'react';
import 'swiper/swiper.min.css'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export type TouchableCarouselProps = {
  images: string[],
};

const TouchableCarousel: React.FC<TouchableCarouselProps> = ({
  images,
}) => {
  return (
    <Swiper 
      spaceBetween={30}
      slidesPerView={4}
      modules={[Autoplay]}
      loopAdditionalSlides={4}
      loop
      autoplay={{
          delay: 1500, 
          disableOnInteraction: false,
      }}
      breakpoints= {{
        320: { // Window width is >= 320px
          slidesPerView: 1,
          spaceBetween: 100
        },
        480: { // Window width is >= 480px
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: { // Window width is >= 640px
          slidesPerView: 4,
          spaceBetween: 40
        }
      }}
    >
      {images.map((img, key) => (
        <SwiperSlide key={key}>
          <img src={img} alt="img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TouchableCarousel;