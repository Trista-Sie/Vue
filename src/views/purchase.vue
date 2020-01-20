<template>
  <div class="purchase">
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 , no-console:off , no-undef: off*/
export default {
  name: "purchase",
  componemts: {},

  data() {
    return {
      url: "",
      result: ""
    };
  },
  methods: {
    saveURL() {
      this.url = this.$route.query;
      console.log("url=", this.url);
      this.result = decodeURIComponent(this.url);
      console.log("result=", this.result);
    }
  }
};
</script>
