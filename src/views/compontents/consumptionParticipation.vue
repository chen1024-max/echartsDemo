<template>
  <!-- 消费参与度 -->
  <div class="consumptionParticipation">
    <div class="title">
      <img src="../../assets/消费参与度1.png" alt="" />
      <span>消费参与度</span>
    </div>
    <div class="dropdownMenu">
      <van-dropdown-menu :overlay="false" class="left">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="content">
      <echarts-bar></echarts-bar>
    </div>
    <div class="proportion"></div>
  </div>
</template>

<script>
import EchartsBar from "../../components/consumptionBar";
export default {
  components: {
    EchartsBar
  },
  data() {
    return {
      value1: 0,
      option1: [
        { text: "未购买", value: 0 },
        { text: "已购买", value: 1 }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.consumptionParticipation {
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
}
* {
  box-sizing: border-box;
}
.content {
  display: flex;
  justify-content: center;
}
.dropdownMenu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 18px;
  /deep/ .van-dropdown-menu__bar {
    box-shadow: none;
  }
  .left {
    /deep/ .van-popup--top {
      top: 7px;
      left: 58%;
      width: 40%;
      border-radius: 10px;
      box-shadow: 1px 1px 7px 0px rgba(3, 0, 0, 0.35);
    }
  }
}
.title {
  padding: 15px 0 0 16px;
  display: flex;
  align-items: center;
  img {
    width: 17px;
    height: 16px;
    margin-right: 9px;
  }
  span {
    font-size: 15px;
    letter-spacing: 0px;
    color: #000000;
  }
}
</style>
