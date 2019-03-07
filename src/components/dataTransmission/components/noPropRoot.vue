<template>
 <div :size="size">
     <div>非prop学习</div>
     <div>
    <div>'非prop特性 默认在子组件的根元素上'</div>
      <div>{{'子prop（根据size改变的normalizedSize）:'+normalizedSize}}</div>

     </div>
 </div>
</template>

<script>
 export default {
   data () {
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
      this.size  = this.$el.getAttribute('size').trim().toLowerCase();
    }
 }
</script>

<style>

 
</style>
