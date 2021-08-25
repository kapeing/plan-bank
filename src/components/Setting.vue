<template>
<form>
  <fieldset>
    <div class="whiich_saved_button">
      <label for="which_saved"><input type="radio" name="which_saved" value="pink" checked>pink</label>
      <label for="which_saved"><input type="radio" name="which_saved" value="blue">blue</label>
      <label for="which_saved"><input type="radio" name="which_saved" value="yellow">yellow</label>
    </div>
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
    <select name="unit_repetition">
      <option value="daily">毎日</option>
      <option value="weekly">毎週</option>
      <option value="monthly" selected>毎月</option>
    </select>
    <div class="week_repetiton">
      <label for="week_repetition" v-for="(week, key) in weekList"  :key="key"><input type="radio" name="week_repetiton" :value="weekListEn[key]">{{ week }}曜日</label>
    </div>
    <div class="kind_repetition">
      <label for="month_repetition"><input type="radio" name="month_repetiton" value="day">日</label>
      <label for="month_repetition"><input type="radio" name="month_repetiton" value="week">曜日</label>
    </div>
    <select name="what_day">
      <option :value="i" v-for="i in 31" :key="i">{{ i }}</option>
    </select>
    <select name="what_week">
      <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
    </select>
    <select name="what_nm_week">
      <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
    </select>
    <select name="what_day_week">
      <option :value="weekListEn[key]" v-for="(week, key) in weekList" :key="key">{{ week }}曜日</option>
    </select>
  </fieldset>
</form>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      weekList: ['日', '月', '火', '水', '木', '金', '土'],
      weekListEn: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    }
  }
}
</script>

<style scoped lang="scss">
input {
  width: 600px; /*親要素いっぱい広げる*/
  padding: 10px 15px; /*ボックスを大きくする*/
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 1px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}
form {
  .button {
    width:25px;
    height: 40px;
  }
}
</style>
