<template> 
  <!-- 非prop属性可以单独定义，也可以直接使用$attrs--取到所有非prop属性 -->
  <div :size="size" v-bind="$attrs">
    <div>非prop学习</div>
    <template>
      <div>'非prop特性 默认在子组件的根元素上'</div>
      <div>{{'子prop（根据size改变的normalizedSize）:'+normalizedSize}}</div>
      <div>$attrs--取到所有非prop属性--{{$attrs}}</div>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: 'noPropSize',
      }
    },
    components: {

    },
    computed: {
      normalizedSize: function () {
        return this.size.trim().toLowerCase()
      }
    },
    mounted() {
      //获取非prop属性
      this.size = this.$el.getAttribute('size').trim().toLowerCase();
    }
  }
</script>

<style>


</style>