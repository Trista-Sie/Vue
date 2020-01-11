<template>
  <div class="home">
    <div class="Navbar">
      <div class="navbar-brand">
        <b>Hotbucks</b>
      </div>
      <img class="info_icon" src="../assets/info_icon.png" />
    </div>

    <div class="menu" id="menu">
      <!-- for迴圈顯示商品列表 -->
      <ul :key="item" v-for="item in product">
        <li class="list-group-item">
          <img class="product_img" v-bind:src="getSrc(item.img)" v-bind:alt="pic" />
          {{item.name}} {{item.price}}元
          <div class="amount_block">
            <img
              class="plus_minus"
              src="../assets/plus.png"
              @click="clickPlus(item.number,item.amount)"
            />
            <input
              :id="item.number"
              class="amount col-md-3 form-control"
              v-model="item.amount"
              type="text"
            />
            <img
              class="plus_minus"
              src="../assets/minus.png"
              @click="clickMinus(item.number,item.amount)"
            />
          </div>
        </li>
      </ul>
    </div>

    <div class="end_block">
      <div class="totalPrice">
        總金額:
        <input class="form-control" id="totalPrice" type="text" value="0" v-model="total_money"/>
      </div>

      <div class="totalAmount">
        總數量:
        <input class="form-control" id="totalAmount" type="text" value="0" v-model="total_amount"/>
      </div>
      <img class="purchase_icon" src="../assets/purchase.png" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint no-unused-vars: 0 , no-console:off , no-undef: off*/
export default {
  name: "home",
  components: {},

  data() {
    return {
      images: "",
      total_amount: 0,
      total_money: 0,

      product: [
        {
          number: 1,
          name: "焦糖星冰樂",
          img: "drink1.jpg",
          price: 130,
          amount: 0
        },
        {
          number: 2,
          name: "焦糖可可星冰樂",
          img: "drink2.jpg",
          price: 145,
          amount: 0
        },
        {
          number: 3,
          name: "英式紅茶",
          img: "drink3.jpg",
          price: 110,
          amount: 0
        },
        {
          number: 4,
          name: "冰蜜柚紅茶",
          img: "drink4.jpg",
          price: 125,
          amount: 0
        },
        {
          number: 5,
          name: "太妃核果風味那堤",
          img: "drink5.jpg",
          price: 145,
          amount: 0
        },
        {
          number: 6,
          name: "耶誕雪人巧克力那堤",
          img: "drink6.jpg",
          price: 150,
          amount: 0
        },
        {
          number: 7,
          name: "法式千層薄餅",
          img: "cake1.jpg",
          price: 95,
          amount: 0
        },
        {
          number: 8,
          name: "咖啡巧克力松露蛋糕",
          img: "cake2.jpg",
          price: 85,
          amount: 0
        },
        {
          number: 9,
          name: "提拉米蘇千層薄餅",
          img: "cake3.jpg",
          price: 100,
          amount: 0
        },
        {
          number: 10,
          name: "可可伯爵薄餅",
          img: "cake4.jpg",
          price: 130,
          amount: 0
        }
      ]
    };
  },

  methods: {
    getSrc(img) {
      //顯示商品圖片
      this.images = require.context("../assets/product/", false, /\.jpg$/);
      return this.images("./" + img);
    },
    clickPlus(p_num, p_amount) {
      this.product.forEach(element => {
        if (element.number == p_num) {
          element.amount++;
          total_money += element.price;
          total_amount++;
        }
      });
    },
    clickMinus(p_num, p_amount) {
      this.product.forEach(element => {
        if (element.number == p_num) {
          total_money -= element.price;
          total_amount--;
          element.amount--;
          if (element.amount < 0) {
            element.amount = 0;
          }
        }
      });
    }
  },
  mounted() {}
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
.end_block {
  display: inline-block;
  margin: 2px;
}

.totalPrice {
  display: inline-block;
  text-align: left;
  font-size: large;
  margin: 3px;
}

.totalAmount {
  display: inline-block;
  text-align: left;
  font-size: large;
  margin: 3px;
}
.purchase_icon {
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
  margin: 30px;
  float: right;
}

.plus_minus {
  height: 30px;
  width: 30px;
}

.list-group-item {
  text-align: left;
  margin: 3px;
}
</style>