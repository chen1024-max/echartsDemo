<template>
  <!-- 购买途径柱状图 -->
  <div>
    <v-chart :options="bar"></v-chart>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
export default {
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      bar: {},
      dataTest: [10, 52, 200, 334, 390, 330, 220],
      dataName: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  },
  created() {
    this.setEcharts();
  },
  methods: {
    setEcharts() {
      let percent = []; //单个项百分比
      let number = 0; //总数
      let dataTest = this.dataTest;
      for (let i = 0; i < this.dataTest.length; i++) {
        number += this.dataTest[i];
      }
      for (let i = 0; i < this.dataTest.length; i++) {
        let item = (this.dataTest[i] / number) * 100;
        let p = Math.round(item);
        percent.push(p);
      }
      this.bar = {
        color: ["#3398DB"],

        height: "80%",
        // width: "90%",
        barMaxWidth: 5,
        grid: {
          left: "3%",
          right: "4%",
          top: "20%",
          containLabel: true
        },

        xAxis: [
          {
            type: "category",
            data: this.dataName,
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              fontSize: 10,
              color: "#808080"
              //   interval: 0,
              //   rotate: 40
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            max: 100,
            min: 0,
            axisLabel: {
              formatter: function(val) {
                console.log(val);
                if (val > 0) {
                  return val + "%";
                } else {
                  return "";
                }
              },
              color: "#808080"
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            itemStyle: {
              color: "#007aff",
              barBorderRadius: [3, 3, 0, 0]
            },
            label: {
              show: true,
              position: "top",
              color: "#808080",
              fontSize: 9,
              lineHeight: 11,
              formatter: function(params) {
                console.log(params);
                return (
                  dataTest[params.dataIndex] + "人" + "\n" + params.value + "%"
                );
              }
            },
            data: percent
          }
        ]
      };
    }
  }
};
</script>

<style lang="less" scoped>
.echarts {
  width: 332px;
  height: 160px;
}
</style>
