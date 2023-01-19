<template>
  <main id="main">
    <!-- 
      1.XX人工智能系统 
      2.中建八局智慧工地系统 
      3.智能评奖系统
      4.华住酒店集团App客房预订系统
      5.青柠檬智能硬件管理平台
      6.网约车运营管理平台
     -->
    <!-- ======= Portfolio Section ======= -->
    <section class="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-ai">人工智能</li>
              <li data-filter=".filter-web">业务管理</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
          <div class="col-lg-4 col-md-6 portfolio-wrap filter-ai">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>中建八局智慧工地系统</h3>
                <div v-if="false">
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-wrap filter-ai">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-10.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>XX人工智能安全管理系统</h3>
                <div v-if="false">
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>智能评奖系统</h3>
                <div v-if="false">
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>
                  <a target="blank" href="https://developer.aliyun.com/article/749925" title="Portfolio Details"
                    >网约车运营管理平台</a
                  >
                </h3>
                <!-- <div>
                  
                    ><i class="bx bx-link"></i
                  ></a>
                </div> -->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>青柠智能硬件管理平台</h3>
                <div v-if="false">
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>XX500强酒店集团App预订系统</h3>
                <div v-if="false">
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="false" class="col-lg-4 col-md-6 portfolio-wrap filter-app">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>App 3</h3>
                <div>
                  <a
                    href="/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="App 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="false" class="col-lg-4 col-md-6 portfolio-wrap filter-card">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>Card 1</h3>
                <div>
                  <a
                    href="/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Card 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="false" class="col-lg-4 col-md-6 portfolio-wrap filter-card">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>Card 3</h3>
                <div>
                  <a
                    href="/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Card 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="false" class="col-lg-4 col-md-6 portfolio-wrap filter-web">
            <div class="portfolio-item">
              <img src="/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h3>Web 1</h3>
                <div>
                  <a
                    href="/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Web 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a href="portfolio-details.html" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </main>
  <!-- End #main -->
</template>
<script>
// @ is an alias to /src

export default {
  name: 'ProtofolioView',
  mounted() {
    console.log('ProtofolioView')
  },
}
</script>
