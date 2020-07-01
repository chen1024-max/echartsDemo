<template>
  <!-- 时间选择 -->
  <div class="date_content">
    <div class="selectDate"><span>选择时间：</span></div>

    <div v-for="(item, index) in btnName" :key="index">
      <van-button
        type="default"
        :class="{ currentBtn: currentBtn == item.name }"
        @click="choiceDate(item.name)"
        >{{ item.name }}</van-button
      >
    </div>
    <datetime-popup
      :popupShow="popupShow"
      @cancel="getcancel"
      @change="getchange"
    ></datetime-popup>
  </div>
</template>

<script>
import DatetimePopup from "../../components/DatetimePopup";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
export default {
  components: {
    DatetimePopup
  },
  data() {
    return {
      btnName: [
        { name: "全部" },
        { name: "30天" },
        { name: "90天" },
        { name: "自定义" }
      ],
      currentBtn: "全部", //当前选中的按钮,默认全部
      popupShow: false, // 是否显示自定义弹窗，传递给自定义按钮组件
      timeRange: [] // 传递给父组件的数据
    };
  },
  methods: {
    choiceDate(val) {
      this.timeRange = [];
      this.currentBtn = val;
      if (val === "自定义") {
        this.popupShow = true;
      }
      if (val === "全部") {
        this.timeRange[0] = "";
        this.timeRange[1] = "";
      } else if (val === "30天") {
        this.timeRange[0] =
          format(subDays(new Date(), 30), "y-MM-dd") + " 00:00:00";
        this.timeRange[1] =
          format(subDays(new Date(), 1), "y-MM-dd") + " 00:00:00";
      } else if (val === "90天") {
        this.timeRange[0] =
          format(subDays(new Date(), 90), "y-MM-dd") + " 00:00:00";
        this.timeRange[1] =
          format(subDays(new Date(), 1), "y-MM-dd") + " 00:00:00";
      }
      console.log(this.timeRange);
      this.$emit("confirm", this.timeRange);
    },
    // 接收自定义按钮的时间
    getchange(value) {
      this.timeRange = [];
      this.timeRange[0] = value[0] + " 00:00";
      this.timeRange[1] = value[1] + " 23:59";
      this.pushDateTime();
    },
    // 自定义按钮改变popuShow状态
    getcancel() {
      this.popupShow = false;
    },
    // 自定义按钮传递获取到的值
    pushDateTime() {
      console.log(this.timeRange);
      this.$emit("confirm", this.timeRange);
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
    font-size: 14px;
  }
  .currentBtn {
    border: solid 1px #007aff;
    color: #007aff;
    border-radius: 12px;
  }
}
</style>
