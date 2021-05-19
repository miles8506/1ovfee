<template>
  <div class="nav_item">
    <ul class="item_wrap" ref="itemWrap">
      <li v-for="(item, index) in navItem" :key="index">
        <a :href="pathURL[index]" @click="goNext(index)">{{ item }}</a>
      </li>
      <li class="search">
        <input
          type="text"
          placeholder="Search"
          @input="searchData"
          v-model.trim="searchValue"
          @focus="clickipt('focus')"
          @blur="clickipt('blur')"
        />
        <span class="search_icon" @click="goSearch"></span>
        <search-list :searchValue="searchValue" />
      </li>
    </ul>
  </div>
</template>
<script>
//components
import SearchList from "./SearchList";

//JS
import { navbarJS } from "assets/js/navbar.js";

export default {
  name: "NavItem",
  data() {
    return {
      pathURL: ["/home", "/new", "/hot", "/popular"],
      searchValue: "",
    };
  },
  mounted() {
    //RWD
    let windowWidth = window.innerWidth;
    let result = 0;
    window.addEventListener("resize", () => {
      if (result < 1) return;
      windowWidth = window.innerWidth;
      if (windowWidth > 1200) {
        this.$refs.itemWrap.classList.remove("current");
      } else {
        this.$refs.itemWrap.classList.add("current");
      }
    });
    window.addEventListener("scroll", () => {
      navbarJS().then((res) => {
        result = res;
        if (windowWidth > 1200) return;
        if (res > 1) {
          this.$refs.itemWrap.classList.add("current");
        } else {
          this.$refs.itemWrap.classList.remove("current");
        }
      });
    });
  },
  components: {
    SearchList,
  },
  props: {
    navItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    // 判斷相對應URL
    goNext(index) {
      event.preventDefault();
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
    searchData() {
      this.$bus.$emit("search");
    },
    clickipt(status) {
      setTimeout(() => {
        this.$bus.$emit("ipt", status);
      }, 500);
    },
    goSearch() {
      const flag = this.$store.state.flag;
      this.$store.commit("putFlag", !flag);
      this.$router.push("/search");
    },
  },
};
</script>
<style scoped>
.nav_item {
  width: 100%;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid #999;
}

.item_wrap {
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 0 !important;
  transform: translateY(-100%);
  animation: move 1s linear forwards;
  animation-delay: 1000ms;
}

.item_wrap li {
  padding: 0 25px;
  line-height: 79px;
}

.item_wrap li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.item_wrap li:hover a {
  color: var(--color-hover);
}

/* input */
input {
  width: 170px;
  height: 25px;
  padding: 5px calc(100% - 145px) 5px 10px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #999;
  font-size: 14px;
}

/* search */
.search {
  position: relative;
}

.search_icon {
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  right: 25px;
  width: 25px;
  height: 25px;
  line-height: 26px;
  text-align: center;
  font-family: "icomoon";
  cursor: pointer;
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
  justify-content: flex-end;
  padding-right: 25px;
}

/* 992 */
@media screen and (max-width: 992px) {
  .nav_item {
    height: 0;
  }
  .item_wrap {
    display: none;
  }
}
</style>