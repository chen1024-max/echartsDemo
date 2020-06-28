<template>
  <div class="main">
    <div class="dateSelect">
      <date-select></date-select>
    </div>
    <div class="header">
      <navigation @showDetails="showDetails"></navigation>
    </div>
    <div class="content">
      <user-gender class="listshow1"></user-gender>
      <student-gender class="listshow2"></student-gender>
      <student-age class="listshow3"></student-age>
      <student-grade class="listshow4"></student-grade>
      <school class="listshow5 "></school>
      <purchase-channels class="listshow6"></purchase-channels>
      <consumption-capacity class="listshow7"></consumption-capacity>
      <consumption-participation class="listshow8"></consumption-participation>
    </div>
    <div class="footer" @click="backTop" v-show="isBackTop">顶部</div>
  </div>
</template>

<script>
import Navigation from "./compontents/navigation";
import DateSelect from "./compontents/dateSelect";
import UserGender from "./compontents/userGender";
import StudentGender from "./compontents/studentGender";
import StudentAge from "./compontents/studentAge";
import StudentGrade from "./compontents/studentGrade";
import School from "./compontents/school";
import PurchaseChannels from "./compontents/purchaseChannels";
import ConsumptionCapacity from "./compontents/consumptionCapacity";
import ConsumptionParticipation from "./compontents/consumptionParticipation";
export default {
  components: {
    Navigation,
    DateSelect,
    UserGender,
    StudentGender,
    StudentAge,
    StudentGrade,
    School,
    PurchaseChannels,
    ConsumptionCapacity,
    ConsumptionParticipation
  },
  data() {
    return {
      showIndex: null,
      currentScroll: document.documentElement.clientHeight,
      scroll: null, //页面滚动高度
      isBackTop: false //是否显示返回顶部
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
    }
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
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.main {
  background-color: #ededed;
}
.header {
  padding: 0 8px;
}
.content {
  padding: 0 8px;
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
