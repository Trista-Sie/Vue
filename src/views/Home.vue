<template>
  <div class="home">
    <div class="Navbar">
      <div class="navbar-brand">
        <b>Hotbucks</b>
      </div>
      <img class="info_icon" src="../assets/info_icon.png" />
    </div>
    <div class="menu" id="menu">
      <ul :key="item" v-for="item in  product">
        <li>
          <img class="product_img" v-bind:src="'../assets/product/'+ item.img +'.jpg'" />
          {{item.name}}  {{item.price}}元
          <img class="plus_minus" src="../assets/plus.png" />
          <input class="amount col-md-3 form-control" type="text" value="0" />
          <img class="plus_minus" src="../assets/minus.png" />
        </li>
      </ul>
    </div>
    <div class="end_block">
      <div class="totalPrice">
        總金額:
        <input class="form-control" id="totalPrice" type="text" value="0" />
      </div>

      <div class="totalAmount">
        總數量:
        <input class="form-control" id="totalAmount" type="text" value="0" />
      </div>
      <img class="purchase_icon" src="../assets/purchase.png" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},

  data() {
    return {
      product: [
        { name: "焦糖星冰樂", img: "drink1", price: 130 },
        { name: "焦糖可可星冰樂", img: "drink2", price: 145 },
        { name: "英式紅茶", img: "drink3", price: 110 },
        { name: "冰蜜柚紅茶", img: "drink4", price: 125 },
        { name: "太妃核果風味那堤", img: "drink5", price: 145 },
        { name: "耶誕雪人巧克力那堤", img: "drink6", price: 150 },
        { name: "法式千層薄餅", img: "cake1", price: 95 },
        { name: "咖啡巧克力松露蛋糕", img: "cake2", price: 85 },
        { name: "提拉米蘇千層薄餅", img: "cake3", price: 100 },
        { name: "可可伯爵薄餅", img: "cake4", price: 130 }
      ]
    };
  },

  methods: {
    makingMenu() {}
  },
  mounted() {
    this.makingMenu();
  }
};
</script>
<style scoped>
.info_icon {
  float: right;
  width: 40px;
  height: 40px;
}
.navbar-brand {
  font-size: 47px;
}
.end_block {
  display: inline-block;
}

.totalPrice {
  display: inline-block;
  text-align: left;
  font-size: large;
}

.totalAmount {
  display: inline-block;
  text-align: left;
  font-size: large;
}
.purchase_icon {
  /* display: inline-block; */
  float: right;
  width: 45px;
  height: 45px;
}
.amount {
  display: inline-block;
}

.product_img {
  height: 150px;
  width: 150px;
}

.amount_block {
  /* display: inline-block; */
  margin: 30px;
  float: right;
}

.plus_minus {
  height: 30px;
  width: 30px;
}
</style>