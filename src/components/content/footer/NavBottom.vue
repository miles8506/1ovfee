<template>
  <div class="nav_bottom">
    <div class="wrap">
      <div class="footer_item">
        <span><a href="javascript:;">ABOUT US</a></span
        >| <span><a href="javascript:;">HOW TO BUY</a></span
        >| <span><a href="javascript:;">VVIP SERVICE</a></span
        >|
        <span><a href="javascript:;">EVENT</a></span>
      </div>
      <div class="service_wrap">
        <div class="service">SERVICE</div>
        <div class="info">
          <div class="email">E-MAIL：servicehelpyou.com</div>
          <div class="phone">FREE TEL：0800-000-000（ AM8:00~PM22:00 ）</div>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  /* padding: 0 150px; */
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
  text-align: center;
}

/* 767px */
@media screen and (max-width: 767px) {
  .wrap {
    display: flex;
  }

  /* footer_item */
  .footer_item {
    flex: 40%;
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .footer_item span {
    padding-left: 40px !important;
  }

  /* service_wrap */
  .service_wrap {
    flex: 60%;
    display: flex;
    flex-direction: column;
  }

  .service_wrap .service {
    width: 120px;
    padding: 0 20px;
    text-align: center;
  }

  .service_wrap .info {
    height: initial;
    margin: 10px 0 0 0;
  }

  .service_wrap .info div {
    height: initial;
  }
}

/* 450px */
@media screen and (max-width: 450px) {
  .footer_item span {
    padding-left: 10px !important;
  }
}
</style>