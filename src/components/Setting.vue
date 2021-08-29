<template>
<form>
  <fieldset>
    <div class="whiich_saved_button">
      <label for="which_saved" v-for="(color, i) in pBankColorList" :key="i">
        <input type="radio" id="which_saved" :value="color" v-model="colors">{{ color }}
      </label>
    </div>
  </fieldset>
  <fieldset>
    <label for="target_saved">目標金額</label>
    <input type="number" id="target_saved" v-model="target_saved">
  </fieldset>
  <fieldset>
    <label for="saved_name">貯金名</label>
    <input type="text" id="saved_name" v-model="saved_name">
  </fieldset>
  <fieldset>
    <label for="unit_repetition">繰り返しの単位</label>
    <select id="unit_repetition" v-model="unitRepetition">
      <option :value="value" v-for="(value , i) in unitRepetitionList"  :key="i">{{ value }}</option>
    </select>
    <div class="week_repetiton">
      <label for="week_repetition" v-for="(weekJp, weekEn, i) in weekdayList"  :key="i">
        <input type="radio" id="week_repetiton" :value="weekEn" >{{ weekJp }}曜日
      </label>
    </div>
    <div class="kind_repetition">
      <label for="month_repetition" v-for="(monthJp, monthEn, i) in  monthRepetitionList" :key="i">
        <input type="radio" id="month_repetiton" :value="monthEn" v-model="month_repetiton">{{ monthJp }}
      </label>
    </div>
    <select id="what_day" v-if="unitRepetition === unitRepetitionList[0]">
      <option :value="i" v-for="i in 31" :key="i">{{ i }}</option>
    </select>
    <select id="what_week" v-else-if="unitRepetition === unitRepetitionList[1]">
      <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
    </select>
    <template v-else>
      <select id="what_number_week">
        <option :value="i" v-for="i in 5" :key="i">第{{ i }}週</option>
      </select>
      <select id="what_day_week">
        <option :value="weekEn" v-for="(weekJp, weekEn, key) in weekdayList" :key="key">{{ weekJp }}曜日</option>
      </select>
      </template>
    </fieldset>
</form>
</template>

<script>
export default {
  id: 'setting',
  data () {
    return {
      unitRepetitionList: [ '毎日', '毎週', '毎月' ],
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
      },
      colors: 'pink',
      target_saved: '100000',
      saved_name: '電子レンジ',
      unitRepetition: '毎日',
      month_repetiton: '日'
    }
  },
  mounted: function () {
  },
  methods: {
    // radioButtonChecked (key) {
    //   return key === 0 ? 'checked' : ''
    // },
    // selectBoxSelected (wishUnitJp, unitJp) {
    //   return wishUnitJp === unitJp ? 'selected' : ''
    // }
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
