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
    <div class="proportion">
      <div class="showTable" @click="showTableBtn">
        <span>展开数据</span>
        <div
          class="imgTop"
          :style="{ display: imgShow === 'top' ? 'block' : 'none' }"
        >
          <img src="../../assets/展开数据.png" />
        </div>
        <div
          class="imgBottom"
          :style="{ display: imgShow === 'bottom' ? 'block' : 'none' }"
        >
          <img src="../../assets/收起.png" />
        </div>
      </div>
    </div>
    <table-details v-show="tableShow" :tableData="tableData"></table-details>
  </div>
</template>

<script>
import EchartsPie from "../../components/gradePie";
import TableDetails from "../../components/table";
export default {
  components: {
    EchartsPie,
    TableDetails
  },
  data() {
    return {
      imgShow: "top", //top显示展开，bottom显示收起
      tableShow: false, //true展开表格，false隐藏表格
      ifGetData: true, //请求成功之后设置为false，不再请求
      tableData: [
        {
          type: "1-5岁",
          value: 15,
          percent: "60%"
        },
        {
          type: "1-5岁",
          value: 15,
          percent: "10%"
        },
        {
          type: "1-5岁",
          value: 15,
          percent: "10%"
        },
        {
          type: "1-5岁",
          value: 15,
          percent: "20%"
        }
      ]
    };
  },
  methods: {
    showTableBtn() {
      if (this.tableShow === true) {
        //收起
        this.tableShow = false;
        this.imgShow = "top";
      } else {
        //展开
        this.tableShow = true;
        this.imgShow = "bottom";
        if (this.ifGetData) {
          console.log("开始请求");
          this.getData();
        }
      }
    },
    getData() {
      //请求成功之后,不再请求
      this.ifGetData = false;
    }
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
.proportion {
  display: flex;
  justify-content: flex-end;
  padding-right: 43px;
  padding-bottom: 10px;
  .showTable {
    display: flex;
    align-items: center;
    span {
      font-size: 13px;
      letter-spacing: 0px;
      color: #1a1a1a;
      margin-right: 8px;
    }
    .imgTop {
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 7px;
        height: 11px;
      }
    }
    .imgBottom {
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 11px;
        height: 7px;
      }
    }
  }
}
</style>
