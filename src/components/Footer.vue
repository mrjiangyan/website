<template>
  <!-- ======= Footer ======= -->
  <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
    <div class="footer-newsletter" v-if="false">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div class="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>链接</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">首页</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">关于我们</a></li>
              <li v-if="false"><i class="bx bx-chevron-right"></i> <a href="#">服务</a></li>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> -->
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>我们的服务</h4>
            <ul>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li> -->
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web开发</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">移动开发</a></li>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li> -->
              <li><i class="bx bx-chevron-right"></i> <a href="#">人工智能</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>联系我们</h4>
            <p>
              <!-- A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br /> -->
              <strong>Phone:</strong> +177 0169 4035<br />
              <strong>Email:</strong> touchbiz@outlook.com<br />
            </p>
          </div>

          <div v-if="false" class="col-lg-3 col-md-6 footer-info">
            <h3>About TouchBiz</h3>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta
              donna mare fermentum iaculis eu non diam phasellus.
            </p>
            <div class="social-links mt-3" v-if="false">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>TouchBiz</span></strong
        >. All Rights Reserved
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
