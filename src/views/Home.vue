<template>
  <div class="main">
    <div class="dateSelect">
      <date-select></date-select>
    </div>
    <div class="header">
      <navigation></navigation>
      <button @click="showDetails(1)">NO1</button>
      <button @click="showDetails(2)">NO2</button>
      <button @click="showDetails(3)">NO3</button>
      <button @click="showDetails(4)">NO4</button>
      <button @click="showDetails(5)">NO5</button>
      <button @click="showDetails(6)">NO6</button>
      <button @click="showDetails(7)">NO7</button>
    </div>
    <div class="content">
      <div style="background:#3FB883" class="listshow1 list">1111111</div>
      <div style="background:#B26031" class="listshow2 list">2222222</div>
      <div style="background:#F0686E" class="listshow3 list">3333333</div>
      <div style="background:#369BEE" class="listshow4 list">4444444</div>
      <div style="background:#FFE793" class="listshow5 list">5555555</div>
      <div style="background:#AC885B" class="listshow6 list">6666666</div>
      <div style="background:#B4177B" class="listshow7 list">7777777</div>
    </div>
    <div class="footer" @click="backTop" v-show="isBackTop">顶部</div>
  </div>
</template>

<script>
import Navigation from "./compontents/navigation";
import DateSelect from "./compontents/dateSelect";
export default {
  components: {
    Navigation,
    DateSelect,
  },
  data() {
    return {
      showIndex: null,
      currentScroll: document.documentElement.clientHeight,
      scroll: null, //页面滚动高度
      isBackTop: false, //是否显示返回顶部
    };
  },
  watch: {
    scroll(val) {
      //   console.log(val)
      if (val > this.currentScroll / 2) {
        this.isBackTop = true;
      } else {
        this.isBackTop = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //跳转到对应模块位置
    showDetails(num) {
      var el = document.getElementsByClassName(`listshow${num}`)[0];
      console.log(el.offsetTop);
      if (this.showIndex == num) {
        this.showIndex = null;
      } else {
        this.showIndex = num;
      }
      console.log("showindex:", this.showIndex);
      this.$nextTick(function() {
        window.scrollTo({ behavior: "smooth", top: el.offsetTop });
      });
    },
    //返回顶部
    backTop() {
      this.$nextTick(() => {
        window.scrollTo({ behavior: "smooth", top: 0 });
        this.isBackTop = false;
      });
    },
    //监听页面滚动高度
    handleScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(this.scroll);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.main{
    background-color: #EDEDED;
}
.content {
  .list {
    width: 100%;
    height: 500px;
  }
}
.footer {
  position: fixed;
  bottom: 35px;
  right: 25px;
}
</style>
