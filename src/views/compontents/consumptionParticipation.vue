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
      <van-dropdown-menu :overlay="false" class="right">
        <van-dropdown-item v-model="value2" :options="option2" />
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
      value2: "a",
      option1: [
        { text: "未购买", value: 0 },
        { text: "已购买", value: 1 }
      ],
      option2: [
        { text: "购买前", value: "a" },
        { text: "购买后", value: "b" }
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
.dropdownMenu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
  .left {
    /deep/ .van-popup--top {
      top: 7px;
      left: 26px;
      width: 40%;
      border-radius: 10px;
      box-shadow: 1px 1px 7px 0px rgba(3, 0, 0, 0.35);
    }
  }
  .right {
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
