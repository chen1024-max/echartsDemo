<template>
  <div class="dateTimePopup">
    <van-popup
      v-model="show0"
      :close-on-click-overlay="false"
      position="bottom"
      :style="{
        height: '25%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
      }"
    >
      <div class="btntop">
        <van-icon name="cross" size="25" @click="cancelTop"></van-icon>
      </div>
      <div class="buttons">
        <van-button
          type="primary"
          text="起始时间"
          @click="onButtonClick('startTime')"
          >{{ startTime }}</van-button
        >
        <span>至</span>
        <van-button
          type="primary"
          text="结束时间"
          @click="onButtonClick('endTime')"
          >{{ endTime }}</van-button
        >
      </div>
      <div class="footer">
        <van-button @click="confirmTop">确定</van-button>
      </div>

      <van-overlay :show="show1">
        <div class="wrapper">
          <van-datetime-picker
            v-model="pickerStartTime"
            type="date"
            :minDate="minDate"
            :maxDate="maxDate"
            @confirm="onConfirm('startTime', $event)"
            @cancel="onCancel('startTime')"
          />
        </div>
      </van-overlay>
      <van-overlay :show="show2">
        <div class="wrapper">
          <van-datetime-picker
            v-model="pickerEndTime"
            type="date"
            :minDate="minDate"
            :maxDate="maxDate"
            @confirm="onConfirm('endTime', $event)"
            @cancel="onCancel('endTime')"
          />
        </div>
      </van-overlay>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    popupShow: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      show0: this.popupShow,
      show1: false,
      show2: false,
      startTime: "开始时间",
      endTime: "结束时间",
      minDate: new Date(2017, 10, 1),
      maxDate: new Date(2022, 10, 1),
      pickerStartTime: "",
      pickerEndTime: "",
      judjemonth: [], // 用来限制选择时间跨度不能超过一年
      judjeyear: [], // 用来限制选择时间跨度不能超过一年
      dateCount: [] // dateCount[0]表示起始时间，dateCount[1]表示结束时间,用来传递到父组件
    };
  },
  watch: {
    popupShow: {
      handler(newV) {
        this.show0 = newV;
      },
      immediate: true
    }
  },
  methods: {
    onConfirm(type, value) {
      let dateCount = this.transform(value);
      if (type === "startTime") {
        this.startTime = dateCount;
        this.dateCount[0] = dateCount;
        this.judjemonth[0] = value.getMonth() + 1;
        this.judjeyear[0] = value.getFullYear();
      } else if (type === "endTime") {
        this.endTime = dateCount;
        this.dateCount[1] = dateCount;
        this.judjemonth[1] = value.getMonth() + 1;
        this.judjeyear[1] = value.getFullYear();
      }
      this.toggle(type);
    },
    onCancel(type) {
      this.toggle(type);
    },
    onButtonClick(type) {
      if (type === "startTime") {
        this.show2 = false;
        this.show1 = true;
      }
      if (type === "endTime") {
        this.show1 = false;
        this.show2 = true;
      }
    },
    cancelTop() {
      this.show0 = false;
      this.$emit("cancel", false);
    },
    confirmTop() {
      if (this.judjedate()) {
        this.$emit("change", this.dateCount);
      }
      this.show0 = false;
      this.$emit("cancel", false);
    },
    // 判断选择的时间是否超过一年
    judjedate() {
      let year = this.judjeyear[1] - this.judjeyear[0];
      let mount = 0;
      if (year > 0) {
        mount =
          (year - 1) * 12 + (12 - this.judjemonth[0] + this.judjemonth[1]);
        if (mount <= 12) {
          return true;
        }
      }
      if (year == 0) {
        mount = this.judjemonth[1] - this.judjemonth[0];
        if (mount >= 0) {
          return true;
        }
      }
      return false;
    },
    //onCancel函数逻辑
    toggle(type) {
      if (type === "startTime") {
        this.show1 = false;
      } else if (type === "endTime") {
        this.show2 = false;
      }
    },
    // 转换时间格式 2019-01-02
    transform(value) {
      let dateCount =
        value.getFullYear() +
        "-" +
        this.p(value.getMonth() + 1) +
        "-" +
        this.p(value.getDate());
      return dateCount;
    },
    //转换时间时补0 如2019-01-02
    p(date) {
      return date < 10 ? "0" + date : date;
    }
  }
};
</script>

<style scoped lang="less">
.dateTimePopup {
  // position: relative;
  .btntop {
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px 0 0;
    // color: #179adb;
    color: #cccccc;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    /deep/.van-button {
      border: 1px solid #ec3749;
      background-color: white;
      color: #ec3749;
      padding: 15px 0;
      border-radius: 15px;
    }
    span {
      margin: 0 15px;
      display: flex;
      align-items: center;
    }
  }
  .wrapper {
    display: flex;
    align-items: flex-end;
    height: 100%;
    /deep/.van-picker {
      width: 100%;
    }
  }
  .footer {
    // position: absolute;
    // bottom: 0;
    margin-top: 25px;
    /deep/ .van-button {
      width: 100%;
      padding: 20px 0;
      border-radius: 20px;
      color: white;
      background-color: #ec3749;
    }
  }
}
</style>
