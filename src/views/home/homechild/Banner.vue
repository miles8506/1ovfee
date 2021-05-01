<template>
  <div class="banner">
    <div
      id="carousel-example-generic"
      class="carousel slide"
      data-ride="carousel"
    >
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <!-- <div class="item active">
          <img src="@/assets/img/dog.jpg" alt="..." />
        </div>
        <div class="item">
          <img src="@/assets/img/dog.jpg" alt="..." />
        </div> -->
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
</style>