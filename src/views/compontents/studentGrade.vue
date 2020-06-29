<template>
  <!-- 学生年级分布 -->
  <div class="studentGrade">
    <div class="title">
      <img src="../../assets/学生年级分布1.png" alt="" />
      <span>学生年级分布</span>
    </div>
    <div class="content">
      <echarts-pie></echarts-pie>
    </div>
    <div class="proportion"></div>
  </div>
</template>

<script>
import EchartsPie from "../../components/gradePie";
export default {
  components: {
    EchartsPie
  }
};
</script>

<style lang="less" scoped>
.studentGrade {
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
</style>
