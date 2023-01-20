<template>
  <main id="main">
    <!-- ======= Contact Section ======= -->
    <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-map"></i>
                  <h3>地址</h3>
                  <p>上海市普陀区祁连山路1035弄188号4幢201室</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bx bx-envelope"></i>
                  <h3>邮箱</h3>
                  <a :href="'mailto:' + to">{{ to }}</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bx bx-phone-call"></i>
                  <h3>电话</h3>
                  <p>+177 0169 4035</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form role="form" class="php-email-form">
              <div v-if="false" class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="姓名" required />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="邮箱" required />
                </div>
              </div>
              <div class="form-group mt-3">
                <a-input
                  type="text"
                  class="form-control"
                  :value="subject"
                  name="subject"
                  id="subject"
                  placeholder="主题"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <a-textarea
                  class="form-control"
                  :value="body"
                  name="message"
                  rows="6"
                  placeholder="信息"
                  required
                ></a-textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center">
                <button href="mailto@touchbiz@outlook.com" @click="mailto" type="submit">发送邮件</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->

    <!-- ======= Map Section ======= -->
    <section v-if="false" class="map mt-2">
      <div class="container-fluid p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
        ></iframe>
      </div>
    </section>
    <!-- End Map Section -->
  </main>
  <!-- End #main -->
</template>
<script>
// @ is an alias to /src

export default {
  name: 'ContactUsView',
  data() {
    return {
      subject: '',
      body: '',
      to: 'touchbiz@outlook.com',
    }
  },
  mounted() {},
  methods: {
    mailto() {
      let url = 'mailto:' + this.to + '?subject=' + this.subject + '&body=' + this.body
      document.location.href = url
    },
  },
}
</script>
