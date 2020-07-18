<template>
  <div class="flex flex-wrap">
    <div v-for="row in inf" v-bind:key="row[0]" class="bg-white rounded-lg p-6">
      <img
        class="h-64 mx-auto"
        :src="
          'https://drive.google.com/uc?export=view&id=' +
          (row[9] ? row[9].slice(33) : '')
        "
      />
      <div>
        <h2 class="text-lg">34 {{ row[8] }}</h2>
        <h3 class="text-md">32 {{ row[0] }}, 33 {{ row[4] }}</h3>
        <div class="text-purple-500">FB {{ row[11]}}</div>
        <div class="text-purple-500">IG {{ row[12]}}</div>
        <div class="text-purple-500">LINE {{ row[13]}}</div>
        <div>{{row[10]}}</div>
      </div>
    </div>
  </div>
</template>
<style>
@import "./output.css";
</style>
<script>
import inf from "./inf.json";

console.log(inf);

export default {
  data() {
    return {
      inf,
    };
  },
};
</script>
