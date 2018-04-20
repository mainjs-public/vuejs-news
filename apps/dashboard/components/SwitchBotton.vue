<template>
    <label class="switch">
        <input :checked="valueSwitch" @change="change($event)" type="checkbox"/>
        <span class="slider round"></span>
    </label>
</template>

<script>
  export default {
    props: ['value', 'onChange'],
    computed: {
      valueSwitch: function () {
        return this.value;
      },
    },
    methods: {
      change(event) {
        this.onChange(event.target.checked)
      }
    }
  }
</script>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 28px;
    }

    .switch input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 23px;
        width: 23px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #3c8dbc;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(23px);
        -ms-transform: translateX(23px);
        transform: translateX(23px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 28px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
