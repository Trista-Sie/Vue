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
        <input class="form-control" id="totalPrice" type="text" value="0" v-model="total_money" />
      </div>

      <div class="totalAmount">
        總數量:
        <input
          class="form-control"
          id="totalAmount"
          type="text"
          value="0"
          v-model="total_amount"
        />
      </div>
      <div class="pay" id="pay">
        <router-link target="_blank" :to="{name:'purchase',query:{order_list}}">
          <img class="purchase_icon" id="pay" src="../assets/purchase.png" />
        </router-link>
        <!-- <img class="purchase_icon" id="pay" src="../assets/purchase.png" @click="turnCart()" /> -->
      </div>
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
      pic: "",
      total_amount: 0,
      total_money: 0,
      name: this.$store.getters.get_order_list,

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
      // order_list: [
      //   { name: "焦糖星冰樂", price: 0, amount: 0 },
      //   { name: "焦糖可可星冰樂", price: 0, amount: 0 },
      //   { name: "英式紅茶", price: 0, amount: 0 },
      //   { name: "冰蜜柚紅茶", price: 0, amount: 0 },
      //   { name: "太妃核果風味那堤", price: 0, amount: 0 },
      //   { name: "耶誕雪人巧克力那堤", price: 0, amount: 0 },
      //   { name: "法式千層薄餅", price: 0, amount: 0 },
      //   { name: "咖啡巧克力松露蛋糕", price: 0, amount: 0 },
      //   { name: "提拉米蘇千層薄餅", price: 0, amount: 0 },
      //   { name: "可可伯爵薄餅", price: 0, amount: 0 }
      // ]
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
          this.total_amount++;
          this.total_money += element.price;
          // console.log("+total-amount=", this.total_amount);
          // console.log("+total-money=", this.total_money);

          if (element.name == this.name) {
            console.log("In plus");
            this.$store.commit("INCREMENT_ORDER");
          }
          // if (element.amount != 0) {
          //   this.order_list.forEach(order => {
          //     if (element.name == order.name) {
          //       order.name = element.name;
          //       order.amount = element.amount;
          //       order.price = element.amount * element.price;
          //       console.log("+order-name=", order.name);
          //       console.log("+order-price=", order.price);
          //       console.log("+order.amount=", order.amount);
          //     }
          //   });
          // }
        }
      });
      // console.log(this.order_list);
    },
    clickMinus(p_num, p_amount) {
      this.product.forEach(element => {
        if (element.number == p_num) {
          element.amount--;
          if (element.amount < 0) {
            element.amount = 0;
          }
          // this.order_list.forEach(order => {
          //   if (element.name == order.name) {
          //     order.amount--;
          //     order.price -= element.price;
          //     console.log("-order-name=", order.name);
          //     console.log("-order-price=", order.price);
          //     console.log("-order.amount=", order.amount);
          //   }
          // });

          // console.log(this.order_list);

          if (element.name == this.name) {
            console.log("In minus");
            this.$store.commit("DECREMENT_ORDER");
          }

          this.total_amount--;
          this.total_money -= element.price;
          if (this.total_amount < 0 || this.total_money < 0) {
            this.total_amount = 0;
            this.total_money = 0;
          }
          // console.log("-total-amount=", this.total_amount);
          // console.log("-total-money=", this.total_money);
        }
      });
    },
    increase() {
      this.$store.dispatch("increment", this.order_list.amount);
      this.$store.dispatch("increment", this.order_list.price);
    }
    // turnCart() {
    //   let routeUrl = this.$router.resolve({
    //     path: "/purchase",
    //     order_list:
    //     { name: "焦糖星冰樂"}
    //     // { name: "焦糖可可星冰樂"},
    //     // { name: "英式紅茶"},
    //     // { name: "冰蜜柚紅茶"},
    //     // { name: "太妃核果風味那堤"},
    //     // { name: "耶誕雪人巧克力那堤"},
    //     // { name: "法式千層薄餅"},
    //     // { name: "咖啡巧克力松露蛋糕"},
    //     // { name: "提拉米蘇千層薄餅"},
    //     // { name: "可可伯爵薄餅"}

    //   });
    //   window.open(routeUrl.href, "_blank");
    // }
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

.pay {
  display: inline-block;
  text-align: right;
  font-size: large;
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