<template>
 <div>

    <div>{{'父（title）'+title}}</div>
    <button @click="title2='newTitle2'">父（改变title2）</button>
    <children :fromChildTitle="title"  :fromChildTitle2="title2"
      @onChangeTitle="handleTitleChange" ></children>
  
 </div>
</template>

<script>
import Children from '@/components/dataTransmission/components/childrenFirst.vue'
 export default {
   data () {
    return {
      title:'*faTitle*',
      title2:'*faTitle2*',

    }
   },
   components: {
    Children,
   },
   methods:{
    handleTitleChange(val){
      this.title+=val;
    },

   }
 }
</script>

<style>

 
</style>
