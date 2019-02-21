<template>
 <div>
    <children :fromChildTitle="title" @onChangeTitle="handleTitleChange"></children>
  
 </div>
</template>

<script>
import Children from '@/components/dataTransmission/components/childrenFirst.vue'
 export default {
   data () {
    return {
      title:'使用props传递title',

    }
   },
   components: {
    Children,
   },
   methods:{
    handleTitleChange(val){
      this.title+=val;
    }
   }
 }
</script>

<style>

 
</style>
