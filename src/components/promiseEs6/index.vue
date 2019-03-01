<template>
 <div>
     <div>Async/Await</div>
     <div>
         <span>{{async}}</span>
     </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         async:'',
     }
   },
   components: {

   },
   methods:{
       async asyncFun(val){
           return val 
        //   return Promise.resolve(1)
       },
       handleAsync(val){
           this.async = 'async'+val;
       }
   },
   mounted(){
        this.handleAsync('------noPromise');
        setTimeout(()=>{
                this.asyncFun('------async').then(val=>{
                this.handleAsync(val);
                });
            },2000)
   }
 }
</script>

<style>

</style>
