<template>
  <div id="app">
    <NavBar />
    <div style="width: 100%; height: 3.75em;" />
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
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1000px;
}
body {
  margin: 0px;
  background-color: #F3F3F3;
}
input {
  font-family: 'Noto Sans KR', sans-serif;
}
select {
  font-family: 'Noto Sans KR', sans-serif;
  color: #757575;
  text-align: center;
}
button {
  font-family: 'Noto Sans KR', sans-serif;
}
textarea {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
