<template>
  <div class="mask_cover" v-show="flag">
    <div class="mask"></div>
    <div class="alert">
      <div class="title">提示訊息</div>
      <div class="text">{{ text }}</div>
      <div class="agree_btn" @click="agree">
        <span>確定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MaskCover",
  data() {
    return {
      flag: false,
      text: "",
    };
  },
  mounted() {
    this.$bus.$on("mask", (text) => {
      this.text = text;
      this.flag = true;
    });
  },
  destroyed() {
    this.$bus.$off("mask");
  },
  methods: {
    agree() {
      this.flag = false;
    },
  },
};
</script>
<style scoped>
/* mask */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #999;
  opacity: 0.5;
  z-index: 99999999;
  cursor: default;
}

/* alert */
.alert {
  position: fixed;
  top: 35%;
  left: 35%;
  padding: 20px 30px;
  transform: translate(-48%, -48%);
  width: 30%;
  margin: 0 auto;
  background-color: #fff;
  border: 2px solid #999;
  z-index: 99999999;
  animation: move 0.3s linear forwards;
}

@keyframes move {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.title {
  display: inline-block;
  height: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}

.text {
  margin-bottom: 20px;
}

.agree_btn {
  float: right;
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #505050;
  cursor: pointer;
}

.agree_btn:hover {
  background-color: #999;
  color: #fff;
  border: 1px solid #999;
}
</style>