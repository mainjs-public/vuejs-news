<template>
    <div>
        <table class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Additional Images</th>
                <th>Tab</th>
                <th>Title</th>
                <th>Sort Order</th>
                <th></th>
            </tr>
            </thead>
            <tbody v-if="dataImage.length">
            <tr v-for="(img, index) in dataImage">
                <td>
                    <choose-image :id="getId(img.id)"
                                  :input-name="getName(index, 'image')"
                                  :value="img.image">
                    </choose-image>
                    <input type="hidden" :name="getName(index, 'id')" v-model="img.id">
                </td>
                <td>
                    <input type="text"
                           class="form-control"
                           v-model="img.tab"
                           :name="getName(index, 'tab')">
                </td>
                <td>
                    <input type="text"
                           class="form-control"
                           v-model="img.title"
                           :name="getName(index, 'title')">
                </td>
                <td>
                    <input type="text"
                           class="form-control"
                           v-model="img.sort_order"
                           :name="getName(index, 'sort_order')">
                </td>
                <td>
                    <button type="button" class="btn btn-danger" index="index" @click="removeImage(img)">
                        <i class="fa fa-minus-circle"></i>
                    </button>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="3"></td>
                <td class="text-left">
                    <button type="button" @click="addImage" class="btn btn-primary">
                        <i class="fa fa-plus-circle"></i>
                    </button>
                </td>
            </tr>
            </tfoot>
        </table>

    </div>

</template>

<script>
  module.exports = {
    data: function () {
      return {
        dataImage: this.listImages
      }
    },

    props: {
      listImages: {
        type: Array,
        default: function () {
          return new Array();
        }
      },

      inputName: {
        type: String,
        default: 'cabin_image'
      }
    },

    computed: {},

    methods: {

      addImage: function () {
        this.dataImage.push({
          id: +new Date,
          image: '',
          sort_order: 0
        });

        console.log(this.listImages);
      },

      removeImage: function (img) {

        var dataImage = this.dataImage.filter(function (image) {
          return image.id !== img.id;
        });

        this.dataImage = dataImage;
      },

      getId: function (id) {
        return "cabin_image" + id;
      },

      getName: function (index, name) {
        return this.inputName + "[" + index + "][" + name + "]";
      }

    }
  }
</script>

<style lang="stylus">

</style>