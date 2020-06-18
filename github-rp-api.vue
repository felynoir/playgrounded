<template>
  <div v-if="online">Onlines</div>
</template>

<script>
export default {
  data() {
    return {
      online: true
    };
  },
  async mounted() {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();
    console.log(data);
  }
};
</script>