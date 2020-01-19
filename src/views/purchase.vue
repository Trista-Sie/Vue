<template>
  <div class="purchase">
    <div>{{url}}</div>
    <div>{{result}}</div>
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 , no-console:off , no-undef: off*/
export default {
  name: "purchase",
  componemts: {},

  data() {
    return {
      url:
        "http://localhost:8080/#/purchase?order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D&order_list=%5Bobject%20Object%5D",
      result: ""
    };
  },
  methods: {
    saveURL() {
      this.url = this.$route.query;
      console.log("url=", this.url);
      this.result = decodeURI(this.url);
      console.log("result=", this.result);
    }
  }
};
</script>
