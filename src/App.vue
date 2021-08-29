<template>
  <section>
    <nav>
      <ul>
        <li><router-link to="/">つもり貯金</router-link></li>
        <li><router-link to="/setting">貯金箱設定</router-link></li>
        <li><router-link to="/history">履歴</router-link></li>
      </ul>
    </nav>
    <router-view />
  </section>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  height: 100%;
  body {
    height: 100%;
  }
}
li{list-style: none;}
section {
  height: 100%;
  background: #fafafa;
  width: 1080px;
  margin: 0 auto;
}
nav {
  ul {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 10px;
  }
}
</style>
