<template>
  <!-- <div id="app">
    <router-view/>
    <FooterBar v-if="isShow" />
  </div> -->
  <div>
    <header>vuex使用</header>
    <br>
    <div>
      <span>{{'count-----'+count}}</span> 
      <button @click="increaseCount">增加</button>
      <button @click="reduceCount">减少</button>
    </div>
    <div>
      <span>{{filterTodos}}</span>
      <button @click="changeTodos">改变todos</button>
    </div>
    <div>
      <span>action-----</span>
      <span>{{actionCount}}</span>
    </div>

  
  </div>
</template>

<script>
// import FooterBar from '@/components/common/FooterBar'
// import config from './config/index'

import { mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: 'primer',
  components:{
    // FooterBar:FooterBar
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['count','actionCount']),
    ...mapGetters(['filterTodos']),
    ...mapActions(['changeActionCountAsync','actionB','actionA'])
  },
  methods: {
    reduceCount(){
      this.$store.commit('reduceCount',2)
    },
    increaseCount(){
      this.$store.commit('increaseCount')
    },
    changeTodos(){
      this.$store.commit('changeTodos')
    }
  },
  watch:{
      $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
        if(to.name=='book'||to.name=='my'){ // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
           this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
           this.$store.dispatch('hideFooter')
        }
      }
  },
  mounted(){
    this.$store.commit('changeIncludeCompontents','primer'); //只能缓存一个同名组件

    this.$store.dispatch('changeActionCountAsync',{name:'--changeActionCountAsync'});//触发actions 异步调用mution中方法改变state
    setTimeout(()=>{
       this.$store.dispatch('actionB',{name:'----actionB'})
      //  this.$store.dispatch({type:'actionB',name:'----actionB'})
    },1000)
    this.$store.dispatch('actionA').then(()=>{
          this.$store.commit('changeActionCount',{name:'--actionA'})
        })
  },

}
</script>
  