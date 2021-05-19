<template>
  <div id="Home">
    <banner :bannerImg="bannerImg" v-if="isShow" />
    <banner :bannerImg="bannerImg_m" v-else />
    <div class="exhibit">
      <div>
        <a href="javascript:;"
          ><img src="@/assets/img/homeimg1.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href="javascript:;"
          ><img src="@/assets/img/homeimg2.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href="javascript:;"
          ><img src="@/assets/img/homeimg3.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href="javascript:;"
          ><img src="@/assets/img/homeimg4.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
    </div>
    <div class="adv_wrap" ref="advWrap">
      <a href="javascript:;"> <img :src="advImg" alt="" @load="getY" /></a>
    </div>
  </div>
</template>
<script>
// //componet
import Banner from "./homechild/Banner";

//newwork
import { getHomeData } from "network/home.js";

//JS
import { navbarJS } from "assets/js/navbar.js";

export default {
  name: "Home",
  data() {
    return {
      bannerImg: [],
      bannerImg_m: [],
      advImg: "",
      isShow: null,
    };
  },
  components: {
    Banner,
  },
  beforeCreate() {
    getHomeData()
      .then((res) => {
        this.bannerImg = res.data[0].bannerImg;
        this.bannerImg_m = res.data[0].bannerImg_m;
        this.advImg = res.data[0].advImg;
      })
      .catch((err) => console.log("err"));
  },
  activated() {
    window.scroll(0, 0);
    document.title = this.$route.meta.title;
  },
  mounted() {
    let WindowWidth = window.innerWidth;
    WindowWidth > 992 ? (this.isShow = true) : (this.isShow = false);
    window.addEventListener("resize", () => {
      WindowWidth = window.innerWidth;
      WindowWidth > 992 ? (this.isShow = true) : (this.isShow = false);
    });
  },
  methods: {
    getY() {
      let Y = this.$refs.advWrap.offsetTop - 400;
      window.addEventListener("scroll", () => {
        navbarJS().then((res) => {
          res > Y ? this.$refs.advWrap.classList.add("current") : "";
        });
      });
    },
  },
};
</script>
<style scoped>
#Home {
  padding: 50px 150px 0;
}

/* exhibit */
.exhibit {
  display: flex;
  margin-top: 50px;
}

.exhibit div {
  position: relative;
  flex: 1;
  margin: 0 20px;
  overflow: hidden;
}

.exhibit div:first-child {
  margin-left: 0;
}

.exhibit div:last-child {
  margin-right: 0;
}

.exhibit div img {
  width: 100%;
  height: 100%;
}

.exhibit div .exhibit_img {
  transition: all 0.7s linear;
}

.exhibit div .exhibit_img:hover {
  transform: scale(1.1);
  opacity: 0.7;
}

/* adv_wrap */
.adv_wrap {
  margin-top: 25px;
  text-align: center;
  opacity: 0;
}

.adv_wrap img {
  width: 100%;
  height: 100%;
}

/* current */
.current {
  animation: show 1s linear forwards;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 992px */
@media screen and (max-width: 992px) {
  #Home {
    padding: 50px;
  }
}

/* 767px */
@media screen and (max-width: 767px) {
  #Home {
    padding: 10px 20px;
  }

  .exhibit {
    flex-wrap: wrap;
  }

  .exhibit div {
    flex: 45%;
    margin: 0 0 20px 0;
  }

  .exhibit div:nth-child(2n-1) {
    margin-right: 20px;
  }

  .exhibit div .exhibit_img {
    transition: initial;
  }

  .exhibit div .exhibit_img:hover {
    transform: initial;
    opacity: initial;
  }
  .adv_wrap {
    margin-top: 10px;
  }
}
</style>