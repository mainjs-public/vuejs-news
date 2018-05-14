<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="pagination-area">
                <ul>
                    <li><a @click.prevent="changeStart(start-1)"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>
                    <li v-for="p in pagination" v-bind:key="p" :class="{active: start === p}"><a @click.prevent="changeStart(p)">{{p+1}}</a></li>
                    <li><a @click.prevent="changeNext(start+1)"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    props: ['length', 'count', 'start', 'hasNextPage', 'changeStartPagination'],
    computed: {
      pagination: function() {
        const countPagination = this.count / this.length;
        let s = this.start - 2;
        let e = this.start + 2;
        if ( s < 0 ) {
          e = (e - s) < countPagination ? e - s : countPagination-1;
          s = 0;
        }
        if (e >= countPagination) {
          e = countPagination-1;
          s = (e - s) >= 0 ? e - s : 0;
        }
        let p = [];
        for (let i = s; i <= e; i++) {
          p.push(i);
        }
        return p;
      },
    },
    methods: {
      changeStart(value) {
        if (value >= 0){
          this.changeStartPagination(value)
        }
      },
      changeNext(value) {
        if(this.hasNextPage) {
          this.changeStart(value)
        }
      }
    }
  }
</script>
<style>
    .pagination-area ul li {
        margin-left: 0px !important;
    }
</style>
