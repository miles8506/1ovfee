<template>
  <div id="Home">
    <banner :bannerImg="bannerImg" />
    <div class="exhibit">
      <div>
        <a href=""
          ><img src="@/assets/img/homeimg1.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href=""
          ><img src="@/assets/img/homeimg2.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href=""
          ><img src="@/assets/img/homeimg3.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
      <div>
        <a href=""
          ><img src="@/assets/img/homeimg4.jpg" alt="" class="exhibit_img"
        /></a>
      </div>
    </div>
    <div class="adv_wrap" ref="advWrap">
      <a href=""> <img :src="advImg" alt="" @load="getY" /></a>
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
      advImg: "",
    };
  },
  components: {
    Banner,
  },
  beforeCreate() {
    getHomeData()
      .then((res) => {
        this.bannerImg = res.data[0].bannerImg;
        this.advImg = res.data[0].advImg;
      })
      .catch((err) => console.log("err"));
  },
  activated() {
    window.scroll(0, 0);
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
</style>