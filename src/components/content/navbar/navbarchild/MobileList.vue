<template>
  <div class="mobile_list" :class="{ slide_f: isShowM, slide_s: !isShowM }">
    <ul class="item_wrap" ref="itemWrap">
      <li v-for="(item, index) in navItem" :key="index">
        <a :href="pathURL[index]" @click="goNext(index)">{{ item }}</a>
      </li>

      <li class="login" v-if="isShowLog">
        <a href="/login" @click="goLogin">Login</a>
      </li>
      <li class="logout" v-else>
        <a href="javascript:;" @click="memberSlide"
          ><span class="user_name"
            >會員管理<span class="img_icon" ref="slideIcon"></span></span
          ></a
        >
      </li>
      <member-list
        @Logout="Logout"
        class="member_mobile"
        v-show="isShowMember"
      />
      <li class="cart">
        <a href="/cart" @click="goCart">Cart</a>
      </li>
    </ul>
  </div>
</template>
<script>
//components
import MemberList from "./Member";

export default {
  name: "MobileList",
  data() {
    return {
      pathURL: ["/home", "/new", "/hot", "/popular"],
      cartBox: [],
      // isShow: false, //刪
      isShowLog: true,
      isShowMember: null,
      userName: "",
      isShowList: null,
    };
  },
  props: {
    navItem: {
      type: Array,
      default() {
        return [];
      },
    },
    isShowM: {
      type: Boolean,
      default: false,
    },
  },
  components: { MemberList },
  created() {
    if (localStorage.getItem("login") !== null) {
      this.userName = localStorage.getItem("login");
      this.isShowLog = false;
      this.isShowList = this.isShowM;
    }
  },
  mounted() {
    this.$bus.$on("user", () => {
      this.userName = localStorage.getItem("login");
      this.isShowLog = false;
      this.isShowMember = false;
    });
  },
  methods: {
    goNext(index) {
      event.preventDefault();
      this.$emit("showList");
      switch (index) {
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/new");
          break;
        case 2:
          this.$router.push("/hot");
          break;
        case 3:
          this.$router.push("/popular");
          break;
      }
    },
    //前往購物車page
    goCart() {
      event.preventDefault();
      this.$emit("showList");
      localStorage.getItem("login") !== null
        ? this.$router.push("/cart")
        : this.$router.push("/login");
    },
    goLogin() {
      event.preventDefault();
      this.$emit("showList");
      this.$router.push("/login");
    },
    //會員管理
    showMember() {
      this.isShowMember = true;
    },
    hideMember() {
      this.isShowMember = false;
    },
    Logout(status) {
      this.isShowLog = true;
      localStorage.removeItem("login");
      this.$router.push("/");
      if (status == "refresh") this.$router.go(0);
      this.$bus.$emit("mask", "帳號已登出");
    },
    memberSlide() {
      const slideIcon = this.$refs.slideIcon;
      if (slideIcon.classList.contains("current_f")) {
        slideIcon.classList.remove("current_f");
        slideIcon.classList.add("current_s");
        $(".member_mobile").stop().slideToggle(300);
      } else if (slideIcon.classList.contains("current_s")) {
        slideIcon.classList.remove("current_s");
        slideIcon.classList.add("current_f");
        $(".member_mobile").stop().slideToggle(300);
      } else {
        slideIcon.classList.add("current_f");
        $(".member_mobile").stop().slideToggle(300);
      }
    },
    showList() {
      console.log(123);
      this.$emit("showList");
    },
  },
};
</script>
<style scoped>
.mobile_list {
  display: none;
  position: absolute;
  top: 71px;
  left: -200px;
  width: 200px;
  height: 100vh;
  background-color: #999999;
  opacity: 0.9;
}

.member_mobile {
  display: none;
  width: 100px;
}

.item_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
}

.item_wrap li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-family: "icomoon";
}

.item_wrap li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff !important;
}

.mobile_list .item_wrap li a:hover {
  color: #fff !important;
}

.user_name {
  position: relative;
}
.img_icon {
  position: absolute;
  top: 1px;
  right: -35px;
  width: 14px;
  height: 14px;
  line-height: 14px;
  margin-left: 10px;
  transform: rotate(0deg);
}

.item_wrap li a {
  text-decoration: none;
}

.item_wrap li a:hover {
  color: #505050 !important;
}

.member_mobile {
  display: none;
}

.user_name {
  position: relative;
}

/* 992 */
@media screen and (max-width: 992px) {
  .mobile_list {
    display: block;
  }

  .member_mobile {
    display: block;
  }
}

/* rotate icon */
.current_f {
  transform: rotate(180deg);
  transition: all 0.3s linear;
}

.current_s {
  transform: rotate(0deg);
  transition: all 0.3s linear;
}

/* slide nav */
.slide_f {
  left: 0px;
  transition: all 0.5s linear;
}

.slide_s {
  left: -200px;
  transition: all 0.5s linear;
}
</style>