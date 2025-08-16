import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./CardSwiper.css"   
const CardSlider = () => {
  return (
    <main>
        
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={2}
          centeredSlides={true}
          slidesPerView="auto"
          speed={900}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            430: { spaceBetween: 50 },
            500: { spaceBetween: 70 },
            650: { spaceBetween: 38 },
          }}
        >
          <SwiperSlide className="swiper-slide slide-1">
            <div className="content">
              <div className="text">
                <h1>AI Cinema Experience</h1>
                <p>
                  Explore cutting-edge AI technologies to revolutionize the
                  cinema experience. Create intelligent video editing tools and
                  storytelling platforms that will shape the future of
                  filmmaking.
                </p>
              </div>
            </div>
          </SwiperSlide>
          ...{" "}
          <SwiperSlide className="swiper-slide slide-2">
            <div className="content">
              <div className="text">
                <h1>Collaborative Innovation</h1>
                <p>
                  Join teams of creative filmmakers, developers, and AI
                  enthusiasts to build groundbreaking solutions in just 24
                  hours. Network with industry professionals and showcase your
                  talent.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide slide-3">
            <div className="content">
              <div className="text">
                <h1>Win Amazing Prizes</h1>
                <p>
                  Compete for prestigious awards and substantial cash prizes.
                  Get a chance to present your work to leading production houses
                  and tech companies. Launch your career in AI cinema
                  technology.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </main>
  );
};

export default CardSlider;
