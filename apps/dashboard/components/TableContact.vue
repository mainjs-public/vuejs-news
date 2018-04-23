<template>
    <div>
        <table id="example1" class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="contacts.length < 1">
                <td colspan="5">Contact empty</td>
            </tr>
            <tr v-else v-for="contact of contacts" v-bind:key="contact.id">
                <td>{{contact.firstName}} {{contact.lastName}}</td>
                <td>{{contact.email}}</td>
                <td>{{contact.phone}}</td>
                <td>{{contact.read === true ? 'Read': 'Not read'}}</td>
                <td>
                    <button class="btn btn-primary btn-xs" @click="readContact(contact)" style="margin-right: 10px">Read</button>
                    <button class="btn btn-danger btn-xs" @click="deleteClick($event, contact.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    props: ['contacts', 'deleteClick', 'readContact'],
  }
</script>
