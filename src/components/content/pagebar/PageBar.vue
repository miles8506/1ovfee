<template>
  <div class="page_bar">
    <div class="page_wrap">
      <div class="page" v-for="(item, index) in pageLength" :key="index">
        <a
          href="javascript:;"
          @click="goPage(index)"
          :class="{ current: currentIndex == index }"
        >
          {{ index + 1 }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageBar",
  data() {
    return {
      pageLength: [],
      currentIndex: 0,
    };
  },
  props: {
    pages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    pages(newData) {
      if (newData) this.pageLength = this.pages;
    },
  },
  methods: {
    goPage(index) {
      if (index === this.currentIndex) return;
      else {
        this.currentIndex = index;
        this.$bus.$emit("page", index);
      }
    },
  },
};
</script>
<style scoped>
.page_bar,
.page_wrap {
  display: flex;
  justify-content: center;
}

.page {
  padding: 0 5px;
}

/* current */
.current {
  text-decoration: underline !important;
}
</style>