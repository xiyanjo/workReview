<template>
 <div>
     <div>Symbol</div>
     <div>Symbol-- 为属性添加非字符串名称</div>




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
       /**
        * 1 创建一个Symbol
        * 2 [[Description]]---存储描述，但是不能在代码中访问
        * 3 typeof(first)--检测是否为Symbol类型
        */
       creatSymbol(){
           let first = Symbol('first');
           let person={};
           person[first] = 'nnn';
           console.log('creatSymbol',person,person[first],first,typeof(first))
       },
       /**使用Symbol */
       useSymbol(){
           let first = Symbol('first name');
           let last = Symbol('last name');
           let person={
               [first]:'mmm'
           };
           Object.defineProperty(person,first,{writable:false})//将属性设为只读
           Object.defineProperties(person,{[last]:{writable:false,value:'zzzz'}})//将属性设为只读
           console.log(person[first]);
           console.log(person[last]);
       },
    
    
   },
   mounted(){
       this.creatSymbol();
       this.useSymbol();
   }
 }
</script>

<style>

</style>
