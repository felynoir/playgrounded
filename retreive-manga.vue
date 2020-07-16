<template>
  <div>hello</div>
</template>

<script>
export default {
  data() {
    return {
      online: true,
      prs: null
    };
  },
  async mounted() {
    const res = await fetch(
      `https://manga2d.com/manga/kingdom-%E0%B8%84%E0%B8%B4%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%A1/kingdom-%E0%B8%84%E0%B8%B4%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%A1-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-392/`,
      {
        mode: "no-cors" // no-cors, *cors, same-origin}
      }
    );
    console.log(res.body);
  }
};
</script>