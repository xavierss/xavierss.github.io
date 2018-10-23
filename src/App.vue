<template>
  <div id="app">
    <!-- <div class="link">
      <router-link to="/" class="link">Go to /</router-link>
      <router-link to="/test" class="link">Go to Test</router-link>
    </div> -->
    <Map></Map>
    <!-- <div class="router" style="position: absolute; bottom: 0; left: 0; height: 400px; background: red; z-index: 1; width: 100%;">
      <router-view/>
    </div> -->
  </div>
</template>

<script>
import Map from './components/Map'
export default {
  name: 'App',
  components: { Map }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
div.link {
  position: absolute;
  z-index: 100;
  background: #fff;
}
div.link a {
  margin: 20px;
}
</style>
