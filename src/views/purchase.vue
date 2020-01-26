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
      <ul>
        <li class="list-group-item"></li>
      </ul>
    </div>
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
      total_amount: 0,
      total_money: 0,
      orderData: [],
    };
  },
  methods: {},
  mounted: function() {
    this.orderData = this.$store.getters.get_order_list;
    console.log("orderData=", this.orderData);
    this.total_amount = this.$store.getters.get_order_list_amount;
    // console.log("total_amount=", this.total_amount);
    this.total_money = this.$store.getters.get_order_list_price;
    // console.log("total_monney=", this.total_money);
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
.product_img {
  height: 150px;
  width: 150px;
}
.list-group-item {
  text-align: left;
  margin: 3px;
}
</style>
