<template>
  <div class="purchase">
    <div class="Navbar">
      <div class="navbar-brand">
        <b>Hotbucks Orderlist</b>
      </div>
      <img class="info_icon" src="../assets/info_icon.png" />
    </div>

    <div class="menu" id="menu">
      <!-- for迴圈顯示商品列表 -->
      <ul :key="item" v-for="item in purchase_list">
        <li class="list-group-item">
          <img class="product_img" v-bind:src="getSrc(item.img)" v-bind:alt="pic" />
          {{item.name}} {{item.price}} {{item.amount}}元
        </li>
      </ul>
    </div>
    <div class="dayTime" v-bind:time="getTime()">下單時間:</div>
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 , no-console:off , no-undef: off*/
export default {
  name: "purchase",
  componemts: {},

  data() {
    return {
      images: "",
      pic: "",
      nowDate: "",
      day: "",
      weekName: "",
      today: "",
      purchase_list: this.$store.getters.get_order_list
    };
  },
  methods: {
    getSrc(img) {
      //顯示商品圖片
      this.images = require.context("../assets/product/", false, /\.jpg$/);
      return this.images("./" + img);
    },
    getTime() {}
  }
};
</script>

<style scoped>
.info_icon {
  float: right;
  width: 40px;
  height: 40px;
}
.Navbar {
  width: 100%;
  text-align: center;
}
.navbar-brand {
  font-size: 47px;
  text-align: center;
}
.time_block {
  text-align: right;
  font-size: larger;
}
</style>
