<template>
  <header
    id="header"
    :class="
      showTransparent()
        ? 'fixed-top d-flex align-items-center header-transparent'
        : 'fixed-top d-flex align-items-center'
    "
  >
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h1 class="text-light">
          <router-link to="/"><span>Touch Biz</span></router-link>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <!--  -->
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <router-link to="/services">服务</router-link>
          </li>
          <li>
            <router-link to="/portfolio">作品集</router-link>
          </li>
          <!-- <li><a href="team.html">服务</a></li>
          <li><a href="blog.html">Blog</a></li> -->
          <!-- 暂时不需要 -->
          <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> -->
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String,
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      let selectHeader = this.select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        this.onscroll(document, headerScrolled)
      }

      this.on(
        'click',
        '.scrollto',
        function (e) {
          console.log(e)
          if (this.select(this.hash)) {
            e.preventDefault()
            let navbar = this.select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile')
              let navbarToggle = this.select('.mobile-nav-toggle')
              navbarToggle.classList.toggle('bi-list')
              navbarToggle.classList.toggle('bi-x')
            }
            this.scrollto(this.hash)
          }
        },
        true
      )
      /**
       * Mobile nav toggle
       */
      this.on('click', '.mobile-nav-toggle', function () {
        this.select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
    },
    select(el, all = false) {
      el = el.trim()
      console.log(all, el)
      console.log(document.querySelector(el))

      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    },
    onscroll(el, listener) {
      el.addEventListener('scroll', listener)
    },
    on(type, el, listener, all = false) {
      console.log(type, el)
      let selectEl = this.select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    },
    showTransparent() {
      console.log(this.$route)
      console.log(this.$route.path.indexOf('about') !== -1)
      return this.$route.path.indexOf('about') === -1
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
