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
  
  </div>
</template>

<script>
// import FooterBar from '@/components/common/FooterBar'
// import config from './config/index'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components:{
    // FooterBar:FooterBar
  },
  data(){
    return {
    }
  },
  computed:{
     ...mapState(['count'])
  },
  methods: {
    reduceCount(){
      this.$store.commit('reduceCount',2)
    },
    increaseCount(){
      his.$store.commit('increaseCount')
    }
  },
  watch:{
      $route(to,from){ //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
          console.log(to)
        if(to.name=='book'||to.name=='my'){ // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
           this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
           this.$store.dispatch('hideFooter')
        }else{
           this.$store.dispatch('hideFooter')
        }
      }
  },
  mounted(){

  },

}
</script>
  