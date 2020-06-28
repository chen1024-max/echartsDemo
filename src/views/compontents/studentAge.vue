<template>
  <!-- 学生年龄 -->
  <div class="studentAge">
    <div class="title">
      <img src="../../assets/学生年龄分布1.png" alt="" />
      <span>学生年龄分布</span>
    </div>
    <div class="content"></div>
    <div class="proportion"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.studentAge {
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
