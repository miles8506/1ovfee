<template>
  <div class="nav_bar">
    <service />
    <h1 ref="logoWrap">
      <a href="/" class="logo" @click="goHome"><img :src="logoURL" alt="" /></a>
    </h1>
    <nav-item :navItem="navItem" class="nav_item" :class="{ status: isShow }" />
    <div class="nav_m" @click="showList"></div>
    <mobile-list :navItem="navItem" :isShowM="isShowM" @showList="showList" />
  </div>
</template>
<script>
//components
import NavItem from "./navbarchild/NavItem";
import Service from "./navbarchild/Service";
import MobileList from "./navbarchild/MobileList";

//JS
import { navbarJS } from "assets/js/navbar.js";

export default {
  name: "NavBar",
  data() {
    return {
      navItem: ["首頁", "本週新品", "熱銷現貨", "人氣預定"],
      logoURL: "https://www.lovfee.com/images/logo/logo.jpg",
      isShow: false,
      isShowM: false,
    };
  },
  components: {
    NavItem,
    Service,
    MobileList,
  },
  mounted() {
    window.addEventListener("scroll", () => {
      navbarJS().then((res) => {
        if (res > 1) {
          this.$refs.logoWrap.classList.add("current");
        } else {
          this.$refs.logoWrap.classList.remove("current");
        }
      });
    });
    this.$bus.$on("ipt", (status) => {
      status == "focus" ? (this.isShow = true) : (this.isShow = false);
    });

    //手機版nav點擊後hide
    this.$bus.$on("mobileList", () => {
      this.isShowM = !this.isShowM;
    });
  },
  methods: {
    goHome() {
      event.preventDefault();
      if (this.$route.path === "/home") return;
      this.$router.push("/");
    },
    showList() {
      this.isShowM = !this.isShowM;
    },
  },
  destroyed() {
    this.$bus.$off("ipt");
    this.$bus.$off("mobileList");
  },
};
</script>
<style scoped>
.nav_bar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 999;
  background: #fff;
}

h1 {
  display: flex;
  justify-content: center;
  margin: 0;
}

.logo {
  width: 230px;
  height: 70px;
  font-size: 40px;
  overflow: hidden;
}

.logo img {
  transform: translateY(-100%);
  animation: move 1s linear forwards !important;
  animation-delay: 0ms;
}

.nav_item {
  width: 100%;
  overflow: hidden;
}

/* animate */
@keyframes move {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

/* current */
.current {
  position: absolute;
  left: 50px;
  top: 40px;
  z-index: 1;
}

.status {
  overflow: visible !important;
}

.nav_m {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 50px;
  width: 30px;
  height: 30px;
  line-height: 28px;
  text-align: center;
  font-size: 28px;
  font-family: "icomoon";
  border: 1px solid #999;
  color: #505050;
  border-radius: 5px;
  cursor: pointer;
  z-index: 99999999999;
}

/* 992 */
@media screen and (max-width: 992px) {
  .nav_bar h1 {
    justify-content: flex-start;
    padding-left: 50px;
    top: 0;
  }
  .current {
    position: relative;
    left: 0;
  }

  .nav_m {
    display: block;
  }
}

/* 767px */
@media screen and (max-width: 767px) {
  .nav_bar h1 {
    padding-left: 10px;
  }

  .nav_m {
    right: 20px;
  }
}
</style>