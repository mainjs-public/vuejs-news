<template>
    <div v-if="error === true">
        Error get data of contact
    </div>
    <div v-else>
        <section class="content-header">
            <h1>
                View contact
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li class="active">View</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">View contact</h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <div class="box-body">
                                <div class="row">
                                    <label class="col-sm-1 control-label">Name:</label>
                                    <div class="col-sm-11">
                                         {{data.firstName}} {{data.lastName}}
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1 control-label">Email:</label>
                                    <div class="col-sm-11">
                                        {{data.email}}
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1 control-label">Phone:</label>
                                    <div class="col-sm-11">
                                        {{data.phone}}
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1 control-label">Message:</label>
                                    <div class="col-sm-11">
                                        {{data.message}}
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-sm-1 control-label">Status:</label>
                                    <div class="col-sm-11">
                                        {{data.read === true ? 'Read': 'Not read'}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import omit from 'lodash/omit';
    import { getContact } from '~/apollo/queries/contact';
    export default {
      data() {
        return {
          data: {},
          error: false,
        }
      },
      async mounted(){
        try {
          if(this.$router.app._route.query.id) {
            const contactId = this.$router.app._route.query.id;
            const client = this.$apollo.getClient();
            const data =  await client.query({ query: getContact , variables: {contactId: contactId}});
            const contact = data.data.contact;
            if (contact === null) {
              this.error = true;
            } else {
              this.data = omit(contact, ['__typename']);
            }
          } else {
            this.error = true;
          }
        } catch (error) {
          this.error = true
        }
      },
      middleware: 'authenticated'
    }
</script>
