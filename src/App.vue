<template>
  <NavBar />
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'APP',
  components: {
    NavBar,
    // eslint-disable-next-line
    Footer,
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
  },
}
</script>

<style></style>
