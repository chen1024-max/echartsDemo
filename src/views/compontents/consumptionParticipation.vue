<template>
  <!-- 消费参与度 -->
  <div class="consumptionParticipation">
    <div class="title">
      <img src="../../assets/消费参与度1.png" alt="" />
      <span>消费参与度</span>
    </div>
    <div class="content"></div>
    <div class="proportion"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.consumptionParticipation {
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
