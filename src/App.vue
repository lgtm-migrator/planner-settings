<template>
  <div id="app">
    <router-view name="account"/>
  </div>
</template>
<script>

export default {
	name: 'App',
};
</script>
<style lang="scss">
html, body {
  font-size: 62.5%;
}
body {
  height: 100vh;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.4rem;
  height: 100%;
  margin: auto;
  max-width: 120rem;
  text-align: center;
}
</style>
