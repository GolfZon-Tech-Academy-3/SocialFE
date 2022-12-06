<template>
  <div id="app">
    <NavBar />
    <router-view class="body" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  /* font-family: 'Inspiration', cursive; */
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1000px;
}
body {
  margin: 0px;
  background-color: #F3F3F3;
}
.body {
  padding-top: 3.75em;
}
</style>
