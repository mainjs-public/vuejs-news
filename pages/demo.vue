<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        new24-fontend
      </h1>
      <h2 class="subtitle">
        {{ persons }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import gql from 'graphql-tag'

const postsQuery = gql`
  query {
    persons {
      id,
      first_name,
      last_name,
    }
  }
`

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      persons: [],
    }
  },
  fetch (context) {
    console.log('fetch');
    let client = context.app.apolloProvider.defaultClient;
    client.query({ query: postsQuery })
    .then((res) => res.data)
    .then(data => {
      console.log(data);
    });
  },
  created() {
    this.test();
  },
  methods: {
    test(){
      // receive the associated Apollo client 
      const client = this.$apollo.getClient()
      client.query({ query: postsQuery })
      .then((res) => {
        this.persons = res.data.persons
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
