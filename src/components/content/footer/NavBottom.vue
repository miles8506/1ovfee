<template>
  <div class="nav_bottom">
    <div class="footer_item">
      <span><a href="">ABOUT US</a></span
      >| <span><a href="">HOW TO BUY</a></span
      >| <span><a href="">VVIP SERVICE</a></span
      >|
      <span><a href="">EVENT</a></span>
    </div>
    <div class="service_wrap">
      <div class="service">SERVICE</div>
      <div class="info">
        <div class="email">E-MAIL：servicehelpyou.com</div>
        <div class="phone">FREE TEL：0800-000-000（ AM8:00~PM22:00 ）</div>
      </div>
    </div>
    <div class="copyright">Copyright @2000~2200 1OVFEE ALL Rights Reserved</div>
  </div>
</template>
<script>
export default {
  name: "NavBottom",
};
</script>
<style scoped>
.nav_bottom {
  margin-top: 25px;
  padding: 0 150px;
  overflow: hidden;
  border-top: 1px solid #999;
  letter-spacing: 2px;
}

/* footer_item */
.footer_item {
  margin-top: 20px;
  color: #999;
}

.footer_item span {
  display: inline-block;
  padding: 0 20px;
}

.footer_item span:first-child {
  padding-left: 0;
}

.footer_item span a {
  color: #000 !important;
  font-weight: 700;
  font-family: "Cambay", "å¾®è»Ÿæ­£é»‘é«”", Arial, Helvetica, sans-serif !important;
}

/* service_wrap */
.service_wrap {
  display: flex;
  margin-top: 20px;
}

.service_wrap .service {
  height: 46px;
  padding: 0 30px;
  border: 1px solid #999;
  line-height: 46px;
}

.service_wrap .info {
  margin-left: 20px;
}

.service_wrap .info div {
  height: 23px;
  line-height: 23px;
  font-family: "Cambay", "å¾®è»Ÿæ­£é»‘é«”", Arial, Helvetica, sans-serif !important;
}

/* copyright */
.copyright {
  margin: 30px 0 40px;
  font-size: 12px;
  color: #999;
}
</style>