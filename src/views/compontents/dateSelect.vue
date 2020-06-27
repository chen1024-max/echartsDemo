<template>
  <!-- 时间选择 -->
  <div class="date_content">
    <div class="selectDate"><span>选择时间：</span></div>

    <div v-for="(item, index) in btnName"
         :key="index">
      <van-button type="default"
                  :class="{ currentBtn: currentBtn == item.name }"
                  @click="choiceDate(item.name)">{{ item.name }}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnName: [
        { name: "全部" },
        { name: "30天" },
        { name: "90天" },
        { name: "自定义" }
      ],
      currentBtn: null //当前选中的按钮
    };
  },
  methods: {
    choiceDate (val) {
      this.currentBtn = val;
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
  .selectDate {
    font-size: 14px;
  }

  /deep/ .van-button {
    padding: 5px 13px;
    height: 24px;
    border: solid 1px white;
  }
  .currentBtn {
    border: solid 1px #007aff;
    color: #007aff;
    border-radius: 12px;
  }
}
</style>
