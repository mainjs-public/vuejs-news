<template>
    <div>
        <section class="content-header">
            <h1>
                Contacts
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li class="active">Contacts</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Contacts List</h3>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="alert alert-danger alert-dismissible" style="margin-bottom: 20px" v-if="error.message">
                            <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                            {{error.message}}
                        </div>
                        <div v-if="$apollo.loading && !contactPagination.data.length">Loading...</div>
                        <div v-else class="box-body">
                            <table-contact :contacts="contactPagination.data" :deleteClick="deleteClick" :readContact="readContactClick"/>
                            <pagination :length="length" :hasNextPage="contactPagination.hasNextPage"  :count="contactPagination.count" :start="start" :changeLengthPanination="changeLengthPanination" :changeStartPagination="changeStartPagination"/>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import omit from 'lodash/omit';
  import { query, queryPagination } from '~/apollo/queries/contact.js';
  import TableContact from '~/components/TableContact.vue';
  import Pagination from '~/components/Pagination.vue';
  export default {
    data() {
      return {
        start: 0,
        length: 10,
        contactPagination: {
          data: [],
          count: 0,
          hasNextPage: false
        }
      }
    },
    apollo: {
      contactPagination: {
        query: queryPagination,
        variables() {
          return {
            start: this.start * this.length,
            length: this.length
          }
        },
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        readContact: 'contact/readContact',
        deleteContact: 'contact/deleteContact'
      }),
      deleteClick(id) {
        this.deleteContact({id: id, start: this.start * this.length , length: this.length});
      },
      readContactClick(data) {
        this.readContact(omit(data, ['__typename', 'created']));
      },
      changeLengthPanination(value) {
        this.length = value;
      },
      changeStartPagination(value) {
        this.start = value;
      }
    },
    computed: {
      error () { return this.$store.state.contact.error },
    },
    components: {
      TableContact,
      Pagination
    },
    middleware: 'authenticated'
  }
</script>
