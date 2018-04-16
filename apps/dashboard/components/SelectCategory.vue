<template>
    <select class="form-control" v-model="category" @change="onchange(category)">
        <option :value="''">None</option>
        <option v-for="category of categories" v-bind:key="category.id" :value="category.id">{{category.name}}</option>
    </select>
</template>

<script>
  import { query } from '~/apollo/queries/category.js';
  export default {
    props: ['category', 'onchange'],
    data () {
      return {
        categories: [],
      }
    },
    apollo: {
      categories: {
        query: query,
      }
    },
  }
</script>
