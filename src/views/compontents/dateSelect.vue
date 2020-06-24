<template>
  <!-- 时间选择 -->
  <div class="date_content">
    <span>选择时间：</span>
    <div @click="choiceDate('timeAll')" >全部</div>
    <div @click="choiceDate('timeThr')">30天</div>
    <div @click="choiceDate('timeNin')">90天</div>
    <div @click="choiceDate('timeCustom')">自定义</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentBtn:null//当前选中的按钮
    }
  },
  methods:{
    choiceDate(val){  
      this.currentBtn = val
    }
  }
};
</script>

<style lang="less" scoped>
.date_content {
  width: 100%;
  padding: 20px 24px 19px 23px;
  margin-bottom: 14px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
    letter-spacing: 0px;
    color: #000000;
  }
}
</style>
