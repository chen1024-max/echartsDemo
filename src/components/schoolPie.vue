<template>
  <!-- 学校分布图 -->
  <div class="echartsPie">
    <v-chart :options="pie"></v-chart>
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
      pie: {
        legend: {
          type: "scroll",
          pageIconSize: 10,
          orient: "vertical",
          icon: "circle",
          right: 0,
          bottom: 10,
          itemWidth: 6,
          itemHeight: 6,
          data: [
            "直接访",
            "邮件营",
            "联盟广",
            "视频广",
            "直接",
            "邮件",
            "联盟",
            "视频",
            "搜索引导"
          ],
          textStyle: {
            fontSize: 12,
            lineHeight: 14,
            color: "#808080"
          }
        },
        color: ["#1ad9bf", "#3ade35", "#915af3", "#00b8f6", "#02f1e7"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["34%", "50%"],
            avoidLabelOverlap: false, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
            hoverAnimation: false, //不开启高亮
            clockwise: false, //饼图的扇区是否是顺时针排布
            itemStyle: {
              normal: {
                borderColor: "#ffffff",
                borderWidth: 1
              }
            },
            label: {
              normal: {
                borderWidth: 20,
                borderRadius: 4,
                padding: [0, -39],
                formatter: function(params) {
                  if (params.value == 0.0) {
                    return "";
                  } else {
                    return params.percent.toFixed(1) + "%" + "\n"; //加/n才会跑到引导线上面
                  }
                },
                color: "#808080"
              }
              //   position: "outer",
              //   alignTo: "labelLine"
            },
            labelLine: {
              length: 16,
              length2: 37,
              smooth: 0, //引导线是否平滑
              lineStyle: {
                color: "#808080"
              }
            },
            data: [
              { value: 335, name: "直接访" },
              { value: 310, name: "邮件营" },
              { value: 234, name: "联盟广" },
              { value: 135, name: "视频广" },
              { value: 335, name: "直接" },
              { value: 310, name: "邮件" },
              { value: 234, name: "联盟" },
              { value: 135, name: "视频" },
              { value: 1548, name: "搜索引导" }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
.echartsPie {
  display: flex;
  justify-content: center;
}
.echarts {
  width: 301px;
  height: 151px;
}
</style>
