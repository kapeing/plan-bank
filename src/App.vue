<template>
  <section>
    <nav>
      <ul>
        <li>つもり貯金</li>
        <li>貯金箱設定</li>
        <li>履歴</li>
      </ul>
    </nav>
    <main>
      <div><span>100,000</span>P-BANK</div>
      <div>貯金箱から取り出したい金額を入力するフォーム</div>
    </main>
    <aside><div>直近の履歴（10件くらい）</div></aside>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./css/destyle.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  li {
    display: flex;
  }
}
</style>
