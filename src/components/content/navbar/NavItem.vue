<template>
  <div>
    <ul class="item_wrap">
      <li v-for="(item, index) in navItem" :key="index">
        <a :href="pathURL" @click="goNext(index)">{{ item }}</a>
      </li>
      <li class="search"><input type="text" placeholder="Search" /></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavItem",
  data() {
    return {
      pathURL: "",
    };
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
      switch (index) {
        case 0:
          this.pathURL = "/new";
          console.log(index);
          break;
        case 1:
          this.pathURL = "/hot";
          break;
        case 2:
          this.pathURL = "/popular";
      }
    },
  },
};
</script>
<style scoped>
.item_wrap {
  display: flex;
  justify-content: center;
  height: 72px;
  margin-bottom: 0 !important;
  border-bottom: 1px solid #999;
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
}

.item_wrap li:hover a {
  color: var(--color-hover);
}

/* input */
input {
  width: 170px;
  height: 25px;
  padding: 5px 10px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #999;
  font-size: 14px;
}

/* search */
.search {
  position: relative;
}

.search::after {
  content: "\e986";
  position: absolute;
  top: 50%;
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
</style>