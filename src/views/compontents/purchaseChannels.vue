<template>
  <!-- 购买途径 -->
  <div class="purchaseChannels">
    <div class="title">
      <img src="../../assets/购买途径1.png" alt="" />
      <span>购买途径</span>
    </div>
    <div class="content">
      <echarts-bar></echarts-bar>
    </div>
    <div class="proportion"></div>
  </div>
</template>

<script>
import EchartsBar from "../../components/purchaseBar.vue";
export default {
  components: {
    EchartsBar
  }
};
</script>

<style lang="less" scoped>
.purchaseChannels {
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
.content {
  display: flex;
  justify-content: center;
}
.proportion {
  width: 100%;
  height: 19px;
}
</style>
