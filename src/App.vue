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
}
</script>

<style></style>
