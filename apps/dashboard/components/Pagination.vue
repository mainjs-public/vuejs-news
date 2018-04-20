<template>
    <div class="row row_container">
        <div class="col-sm-12 col-md-5">
            <label class="label_input">Show
                <select name="example1_length" aria-controls="example1" class="form-control input-sm select_margin">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> entries
            </label>
        </div>
        <div class="col-sm-12 col-md-7 pagination_right">
            <div class="dataTables_info info_datatable" role="status" aria-live="polite">Showing {{min}} to {{max}} of {{total}}
                entries
            </div>
            <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination">
                    <li class="paginate_button previous disabled">
                        <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a>
                    </li>
                    <li class="paginate_button active">
                        <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a>
                    </li>
                    <li class="paginate_button ">
                        <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">2</a>
                    </li>
                    <li class="paginate_button ">
                        <a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0">3</a>
                    </li>
                    <li class="paginate_button ">
                        <a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0">4</a>
                    </li>
                    <li class="paginate_button ">
                        <a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0">5</a>
                    </li>
                    <li class="paginate_button ">
                        <a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0">6</a>
                    </li>
                    <li class="paginate_button next" id="example1_next">
                        <a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import ceil from 'lodash/ceil';
    export default {
      props: ['count', 'onChange', 'total'],
      data() {
        return {
          number: 1,
          min: 1,
        }
      },
      computed: {
        rowTotal() {
          return ceil(this.total/this.count);
        },
        select() {
          return this.count;
        },
        max() {
          return this.count > this.total ? this.total :this.count;
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
    .pagination_right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .info_datatable {
        margin-right: 10px;
    }
    .row_container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
