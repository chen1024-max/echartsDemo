<template>
  <!-- 顶部导航 -->
  <div class="navigation">
    <div class="naTop icon">
      <div
        class="imgBtn"
        v-for="(item, index) in imgBtn"
        :key="index"
        @click="showDetails(index + 1)"
      >
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div class="naBottom icon">
      <div
        class="imgBtn"
        v-for="(item, index) in imgBtn1"
        :key="index"
        @click="showDetails(index + 5)"
      >
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgBtn: [
        { img: require("../../assets/购买用户性别.png"), text: "购买用户性别" },

        { img: require("../../assets/学生用户性别.png"), text: "学生用户性别" },

        { img: require("../../assets/学生年龄分布.png"), text: "学生年龄分布" },

        { img: require("../../assets/学生年级分布.png"), text: "学生年级分布" }
      ],
      imgBtn1: [
        { img: require("../../assets/学校分布.png"), text: "学校分布" },

        { img: require("../../assets/购买途径.png"), text: "购买途径" },

        { img: require("../../assets/消费能力分析.png"), text: "消费能力分析" },

        { img: require("../../assets/消费参与度.png"), text: "消费参与度" }
      ]
    };
  },
  methods: {
    showDetails(val) {
      this.$emit("showDetails", val);
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.navigation {
  width: 100%;
  padding: 14px 22px;
  background-color: #ffffff;
  border-radius: 5px;
}
.naTop {
  display: flex;
  justify-content: space-between;
}
.naBottom {
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
}
.imgBtn {
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #666666;
  img {
    width: 31px;
    height: 31px;
    margin-bottom: 8px;
  }
  span {
    transform: scale(0.94, 1);
    line-height: 12px;
  }
}
</style>
