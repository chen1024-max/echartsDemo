<template>
  <!-- 购买用户性别 -->
  <div class="studentGender">
    <div class="title">
      <img src="../../assets/学生用户性别1.png" alt="" />
      <span>学生用户性别</span>
    </div>
    <div class="content">
      <div class="icon">
        <img src="../../assets/男.png" alt="" />
        <img src="../../assets/女.png" alt="" />
      </div>
      <div class="Proportion">
        <div class="man" :style="{ width: manPercent }"></div>
        <div class="line" v-show="test[1].value > 0"></div>
        <div class="noSelect"></div>
        <div class="line"></div>
        <div class="women" :style="{ width: womenPercent }"></div>
      </div>
    </div>
    <div class="text">
      <div class="top">
        <div class="topContent">
          <span>{{ test[0].value }}人</span>
          <span>男性占比</span>
        </div>
        <div class="topContent">
          <span>{{ test[1].value }}人</span>
          <span>未选择</span>
        </div>
        <div class="topContent">
          <span>{{ test[2].value }}人</span>
          <span>女性占比</span>
        </div>
      </div>
      <div class="bottom">
        <div class="manPercent">{{ manPercent }}</div>
        <div class="noSelectPercent">{{ noSelectPercent }}</div>
        <div class="womenPercent">{{ womenPercent }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [
        { type: "man", value: 2379 },
        { type: "noSelect", value: 1000 },
        { type: "women", value: 859 }
      ],
      manPercent: 0, //男性占比
      womenPercent: 0, //女性占比
      noSelectPercent: 0 //未选择占比
    };
  },
  mounted() {
    let number = this.test[0].value + this.test[1].value + this.test[2].value;
    let man = (this.test[0].value / number).toFixed(3);
    let women = (this.test[2].value / number).toFixed(3);
    this.manPercent = (man * 100).toFixed(1) + "%";
    this.womenPercent = (women * 100).toFixed(1) + "%";
    this.noSelectPercent =
      (100 - (man * 100).toFixed(1) - (women * 100).toFixed(1)).toFixed(1) +
      "%";
  },
  methods: {
    count(dateVal) {
      //父组件调用 传入时间，请求数据
      console.log(dateVal);
    }
  }
};
</script>

<style lang="less" scoped>
.studentGender {
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
}
* {
  box-sizing: border-box;
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
  margin: 22px 0 18px 0;
  .icon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 26px 0 28px;
    img {
      width: 18px;
      height: 29px;
    }
  }
  .Proportion {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 13px 24px 0 25px;

    .man {
      background: linear-gradient(to left, #09abfc, #00f7e5);
      height: 8px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .line {
      height: 15px;
      width: 2px;
      margin: 0 1px;
      background-color: #b3b3b3;
    }
    .noSelect {
      background-color: #b3b3b3;
      flex: 1;
      height: 8px;
    }
    .women {
      height: 8px;
      background: linear-gradient(to left, #ffbc35, #fed734);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .text {
    width: 100%;
    padding: 0 34px 0 35px;
    .top {
      display: flex;
      justify-content: space-between;
      .topContent {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .topContent :nth-child(1) {
        font-size: 17px;
        color: #1a1a1a;
      }
      .topContent :nth-child(2) {
        font-size: 12px;
        line-height: 10px;
        margin-top: 5px;
        // transform: scale(0.961);
        color: #999999;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 15px 0 19px 0px;
      font-size: 18px;
      line-height: 17px;
      .manPercent {
        color: #09abfc;
      }
      .noSelectPercent {
        color: #333333;
      }
      .womenPercent {
        color: #ffbc35;
      }
    }
  }
}
</style>
