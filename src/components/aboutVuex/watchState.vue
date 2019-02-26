<template>
 <div>
     <header>观察store中数据变化</header>
     <br>
     <div>
        <span>{{'count-----'+count}}</span>
        <br>
        <p>
            <span>filterTodos-----</span>
            <span>{{filterTodos}}</span>
        </p>
        <p>
            <span>{{actionCount}}</span>
        </p>
     </div>
 </div>
</template>

<script>
import { mapState,mapGetters  } from 'vuex'

 export default {
   name:'watchState',
   data () {
     return {
        actionCount:this.$store.state.actionCount
     }
   },
   components: {

   },
   computed:{
     ...mapState(['count']),
     ...mapGetters(['filterTodos']),
  },
  mounted(){
      this.$store.commit('reduceCount',2);

    //   this.$store.commit('changeIncludeCompontents','watchState');

  }
 }
</script>

<style>

 
</style>
