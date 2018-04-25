<template>
    <div class="row row_container">
        <div class="col-sm-12 col-md-5">
            <label class="label_input">Show
                <select v-model="length" @change="changeLength($event)" class="form-control input-sm select_margin">
                    <option :value="10">10</option>
                    <option :value="25">25</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                </select> entries
            </label>
        </div>
        <div class="col-sm-12 col-md-7 pagination_right">
            <div class="dataTables_paginate paging_simple_numbers pull-right">
                <ul v-if="count" class="pagination">
                    <li class="paginate_button previous" v-bind:class="start === 0 ? 'disabled': ''">
                        <a @click.prevent="changeStart(start-1)" class="disabled">Previous</a>
                    </li>
                    <li v-for="p in pagination" v-bind:key="p" :class="{paginate_button: true, active: start === p}">
                        <a @click.prevent="changeStart(p)">{{ p + 1 }}</a>
                    </li>
                    <li class="paginate_button next" v-bind:class="pagination.length - 1 === start ? 'disabled': ''">
                        <a @click.prevent="changeStart(start+1)">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      props: ['length', 'count', 'start', 'changeLengthPanination', 'changeStartPagination'],
      computed: {
        pagination: function() {
          let p = [];
          for (let i = 0; i < this.count / this.length; i++) {
            p.push(i);
          }
          return p;
        },
      },
      methods: {
        changeLength(e) {
          this.changeLengthPanination(Number(e.target.value));
        },
        changeStart(value) {
          if (value >= 0 && value < this.pagination.length) {
            this.changeStartPagination(value)
          }
        }
      }
    }
</script>
<style>
    .label_input {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }
    .select_margin {
        margin: 0px 10px;
    }
    .row_container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
