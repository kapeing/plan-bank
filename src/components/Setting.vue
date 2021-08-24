<template>
<form>
  <fieldset>
    <label for="which_saved">どの貯金箱？</label>
    <input type="number" name="which_saved">
  </fieldset>
  <fieldset>
    <label for="target_saved">目標金額</label>
    <input type="number" name="target_saved">
  </fieldset>
  <fieldset>
    <label for="saved_name">貯金名</label>
    <input type="text" name="saved_name">
  </fieldset>
  <fieldset>
    <label for="unit_repetition">繰り返しの単位</label>
    <input type="text" name="unit_repetition">
  </fieldset>
  <fieldset>
    <label for="repetition_interval">繰り返しの間隔</label>
    <input type="text" name="repetition_interval">
  </fieldset>
</form>
</template>

<script>

</script>

<style lang="scss">
input {
  width: 600px; /*親要素いっぱい広げる*/
  padding: 10px 15px; /*ボックスを大きくする*/
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 1px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}
</style>
