<template>
   <div>
      <section class="content-header">
         <h1>
            Users
         </h1>
         <ol class="breadcrumb">
            <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
            <li class="active">Users</li>
         </ol>
      </section>
      <section class="content">
         <div class="row">
            <div class="col-xs-12">
               <div class="box">
                  <div class="box-header">
                     <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                        <h3 class="box-title">Users List</h3>
                        <nuxt-link to="/user/edit" class="btn btn-primary">
                           <div style="display: flex; flex-direction: row; align-items: center;">
                              <span>New User</span>
                           </div>
                        </nuxt-link>
                     </div>
                  </div>
                  <!-- /.box-header -->
                  <!--<div v-if="$apollo.loading && !categoryPagination.data.length">Loading...</div>-->
                  <div class="box-body">
                     <table-user :users="users" :deleteClick="deleteClick"/>
                     <!--<pagination :length="length" :hasNextPage="categoryPagination.hasNextPage" :count="categoryPagination.count" :start="start" :changeLengthPanination="changeLengthPanination" :changeStartPagination="changeStartPagination"/>-->
                  </div>
                  <!-- /.box-body -->
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script>
   import TableUser from '~/components/TableUser.vue';
   const users_test = [
     {
       id: "1",
       name: "Linh Pham",
       email: "e@gmail.com",
       type: 'Admin',
       created: new Date(),
     },
     {
       id: "2",
       name: "Ngoc Dang",
       email: "e@gmail.com",
       type: 'Contributor',
       created: new Date(),
     },
     {
       id: "3",
       name: "Hoai Nam",
       email: "e@gmail.com",
       type: 'Contributor',
       created: new Date(),
     },
     {
       id: "4",
       name: "Thuong Hai",
       email: "e@gmail.com",
       type: 'Editer',
       created: new Date(),
     },
     {
       id: "5",
       name: "Hao Quang",
       email: "e@gmail.com",
       type: 'Editer',
       created: new Date(),
     },
   ];

   export default {
      data() {
        return {
          users: users_test,
        }
      },
     methods: {
       deleteClick() {
         console.log('delete')
       }
     },
     components: {
        TableUser
     }
   }
</script>
