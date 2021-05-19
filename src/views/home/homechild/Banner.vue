<template>
  <div class="banner">
    <div class="banner_wrap">
      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div
            v-for="(item, index) in bannerImg"
            :key="index"
            class="item"
            :class="{ active: index === 0 }"
          >
            <img :src="item" />
          </div>
        </div>

        <!-- Controls -->
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",

  props: {
    bannerImg: {
      type: Array,
      default() {
        return [];
      },
    },
    bannerImg_m: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    $(".carousel").carousel({
      interval: 3000,
    });
  },
};
</script>
<style scoped>
.carousel {
  height: 1000px;
}

img {
  width: 100%;
  height: 1000px !important;
}

.carousel-control {
  top: 50%;
  bottom: unset !important;
  /* bottom: none; */
  transform: translateY(-50%);
  background-image: none !important;
  text-shadow: none;
  opacity: 1;
}

.banner_wrap_m {
  display: none;
}

/* 992px */
@media screen and (max-width: 992px) {
  .carousel {
    height: 700px;
  }

  img {
    height: 700px !important;
  }
}

/* 767px */
@media screen and (max-width: 767px) {
  .carousel {
    height: 500px;
  }

  img {
    height: 500px !important;
  }
}

/* 472px */
@media screen and (max-width: 472px) {
  .carousel {
    height: 350px;
  }

  img {
    height: 350px !important;
  }
}
</style>