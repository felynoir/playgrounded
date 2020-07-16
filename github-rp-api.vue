<template>
  <div>
    <div>
      <div v-for="pr in prs" v-bind:key="pr.title">{{pr.title}}</div>
    </div>
    <br />
    <button v-on:click="makePR">Make pull req</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      online: true,
      repo: "Dragonfly161518/playgrounded",
      prs: null
    };
  },
  async mounted() {
    const res = await fetch(`https://api.github.com/repos/${this.repo}/pulls`);
    const data = await res.json();
    this.prs = data;
  },
  methods: {
    makePR: async () => {
      const ex = {
        title: "Amazing new feature #2",
        body: "Please pull these awesome changes in!",
        head: "pr-api",
        base: "master"
      };
      fetch(`https://api.github.com/repos/Dragonfly161518/playgrounded/pulls`, {
        method: "post",
        headers: new Headers({
          Authorization: "token 9327198e278fb3345cb9cf3e90d40e393b31a6f6"
        }),
        body: JSON.stringify(ex)
      })
        .then(function(response) {
          console.log(response.json());
        })
        .then(function(data) {
          console.log("Created:", data);
        })
        .catch(function(e) {
          console.log("error", e);
        });
    }
  }
};
</script>