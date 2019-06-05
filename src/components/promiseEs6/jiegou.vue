<template>
 <div>
     <div>结构赋值</div>




 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
    //    对象解构赋值学习
       learnJieGou(){
           let node ={
               type:'oldType',
               name:'oldName',
               loc:{
                   start:1,
                   end:6
               }
           } 
        //    嵌套解构
           let {loc:{start}}=node;
           console.log('start', start);

            // 对象解构
           let { type , name } = node;
           console.log(111,type,name);
           node.type='newType';
           node.name='newName';
        //    对象赋值
           ({ type , name } = node);
           console.log(222,type,name);

       }
       
   },
   mounted(){
        this.learnJieGou();
   }
 }
</script>

<style>

</style>
