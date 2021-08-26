<template>
<form>
  <fieldset>
    <div class="whiich_saved_button">
      <label for="which_saved" v-for="(color, i) in pBankColorList" :key="i">
        <input type="radio" name="which_saved" :value="color" :checked="radioButtonChecked(i)">{{ color }}
      </label>
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
      <option :value="unitEn" v-for="(unitJp, unitEn, i) in unitRepetitionList"  :key="i" :selected="selectBoxSelected(unitRepetitionList.monthly, unitJp)">{{ unitJp }}</option>
    </select>
    <div class="week_repetiton">
      <label for="week_repetition" v-for="(weekJp, weekEn, i) in weekdayList"  :key="i">
        <input type="radio" name="week_repetiton" :value="weekEn" :checked="radioButtonChecked(key)">{{ weekJp }}曜日
      </label>
    </div>
    <div class="kind_repetition">
      <label for="month_repetition" v-for="(monthJp, monthEn, i) in  monthRepetitionList" :key="i">
        <input type="radio" name="month_repetiton" :value="monthEn" :checked="radioButtonChecked(i)">{{ monthJp }}
      </label>
    </div>
    <select name="what_day">
      <option :value="i" v-for="i in 31" :key="i">{{ i }}</option>
    </select>
    <select name="what_week">
      <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
    </select>
    <select name="what_number_week">
      <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
    </select>
    <select name="what_day_week">
      <option :value="weekEn" v-for="(weekJp, weekEn, key) in weekdayList" :key="key">{{ weekJp }}曜日</option>
    </select>
  </fieldset>
</form>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      unitRepetitionList: {
        daily: '毎日',
        weekly: '毎週',
        monthly: '毎月'
      },
      weekdayList: {
        sunday: '日',
        monday: '月',
        tuesday: '火',
        wednesday: '水',
        thursday: '木',
        friday: '金',
        saturday: '土'
      },
      pBankColorList: ['pink', 'blue', 'green'],
      monthRepetitionList: {
        day: '日',
        week: '曜日'
      }
    }
  },
  methods: {
    radioButtonChecked (key) {
      return key === 0 ? 'checked' : ''
    },
    selectBoxSelected (wishUnitJp, unitJp) {
      return wishUnitJp === unitJp ? 'selected' : ''
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
