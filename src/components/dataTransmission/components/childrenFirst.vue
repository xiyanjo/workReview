<template>
 <div>
     <div>{{'父组件向子组件传递数据:'+fromChildTitle}}</div>
     <button @click="emitChangeTitle">子组件操作改变父组件中数据标题</button>
 </div>
</template>

<script>
 export default {
   props:{
       fromChildTitle:'',
   },
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
     emitChangeTitle(){
       this.$emit('onChangeTitle','-children-change');
     }
   }
 }
</script>

<style>

 
</style>
