import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

export default () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 4950,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide><img src='https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg' style={{maxWidth: '100%'}}></img></SwiperSlide>
      <SwiperSlide><img src='https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg' style={{maxWidth: '100%'}}></img></SwiperSlide>
      <SwiperSlide><img src='https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg' style={{maxWidth: '100%'}}></img></SwiperSlide>
      <SwiperSlide><img src='https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg' style={{maxWidth: '100%'}}></img></SwiperSlide>
    </Swiper>
  );
};