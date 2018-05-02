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
        let p = [];
        for (let i = 0; i < this.count / this.length; i++) {
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
