<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        loop: true,
      },
    }
  },
}
</script>

<template>
  <div class="hero-wrapper">
    <div class="hero">
      <div class="logo_square"></div>
      <div class="frames frame1"></div>
      <div class="frames frame2"></div>
      <div class="frames frame3"></div>
      <div class="frames frame4"></div>
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="box">
            <div class="slide_images slide_image1">
              <div class="slide_img_filter"></div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="slide_images slide_image2">
              <div class="slide_img_filter"></div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="slide_images slide_image3">
              <div class="slide_img_filter"></div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="slide_images slide_image4">
              <div class="slide_img_filter"></div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="box">
            <div class="slide_images slide_image5">
              <div class="slide_img_filter"></div>
            </div>
          </div>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: 1440px;
  position: relative;
  margin: auto;
  overflow: hidden;
  & .logo_square {
    position: absolute;
    width: 294px;
    height: 336px;
    top: calc(50% - 168px);
    left: calc(50% - 147px);
    background-image: url('~assets/images/logos/logo_square.svg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 3;
  }
  & .frames {
    position: absolute;
    max-width: 600px;
    width: 100%;
    height: 275px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    pointer-events: none;
    filter: drop-shadow(4px 4px 2px rgb(0 0 0 / 0.4));
  }
  & .frame1 {
    background-image: url('~assets/images/home_hero/circles/circles_top_left.svg');
  }
  & .frame2 {
    background-image: url('~assets/images/home_hero/circles/circles_bottom_left.svg');
    bottom: 0;
    left: 0;
  }
  & .frame3 {
    background-image: url('~assets/images/home_hero/circles/circles_top_right.svg');
    top: 0;
    right: 0;
  }
  & .frame4 {
    background-image: url('~assets/images/home_hero/circles/circles_bottom_right.svg');
    bottom: 0;
    right: 0;
  }
}

.box {
  width: 100%;
  height: calc(100vh - 80px);
  & .slide_images {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  & .slide_image1 {
    background-image: url('~assets/images/home_hero/slide1.jpg');
  }
  & .slide_image2 {
    background-image: url('~assets/images/home_hero/slide2.jpg');
  }
  & .slide_image3 {
    background-image: url('~assets/images/home_hero/slide3.jpg');
  }
  & .slide_image4 {
    background-image: url('~assets/images/home_hero/slide4.jpg');
  }
  & .slide_image5 {
    background-image: url('~assets/images/home_hero/slide5.jpg');
  }
  & .slide_img_filter {
    background: rgba($color: white, $alpha: 0.4);
    width: 100%;
    height: 100%;
  }
}

.swiper-pagination {
  ::v-deep .swiper-pagination-bullet {
    background: #804b40;
    opacity: 1;
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: #190808;
  }
}

@media screen and (min-width: 1440px) {
  .hero {
    border-radius: 12px;
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    & .frames {
      width: 300px;
      height: 125px;
    }
  }
}
</style>
