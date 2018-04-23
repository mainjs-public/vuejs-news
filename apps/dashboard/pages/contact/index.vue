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
                        <div v-if="$apollo.loading"> ...loading</div>
                        <div class="box-body" v-else>
                            <table-contact :contacts="contacts" :deleteClick="deleteClick" :readContact="readContactClick"/>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import omit from 'lodash/omit';
  import { query } from '~/apollo/queries/contact.js';
  import TableContact from '~/components/TableContact.vue';
  export default {
    data () {
      return {
        contacts: [],
      }
    },
    apollo: {
      contacts: {
        query: query,
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        readContact: 'contact/readContact',
        deleteContact: 'contact/deleteContact'
      }),
      deleteClick(e, id) {
        this.deleteContact(id);
        e.preventDefault();
      },
      readContactClick(data) {
        this.readContact(omit(data, ['__typename']));
      }
    },
    components: {
      TableContact
    },
    middleware: 'auth'
  }
</script>
