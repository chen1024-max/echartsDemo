<template>
  <!-- 消费能力分析 -->
  <div class="consumptionCapacity">
    <div class="title">
      <img src="../../assets/消费能力分析1.png" alt="" />
      <span>消费能力</span>
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
    return {};
  }
};
</script>

<style lang="less" scoped>
.consumptionCapacity {
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
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
.proportion {
  width: 100%;
  height: 16px;
}
</style>
