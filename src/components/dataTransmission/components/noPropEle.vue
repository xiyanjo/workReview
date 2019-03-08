<template>
 <div>
    <div>
      <div  v-bind="$attrs">非prop属性在元素上使用</div>
    </div>
 </div>
</template>

<script>
 export default {
    inheritAttrs: false,
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
