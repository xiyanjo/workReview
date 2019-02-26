<template>
  <div style="height:100%">
    <div style="background:blue;">总入口页面</div>
    <div class="flexDirectionRow"  style="height:100%">
      <div  class="flexDirectionRow">

        <left-menu v-if="isMenu" style="background:pink;"></left-menu>

        <div style="width:50px;background:pink">
          <div v-show="!isMenu" @click="isMenu=true">显示</div>
          <div v-show="isMenu" @click="isMenu=false">隐藏</div>
        </div>
      </div>
      <div style="background:#eee;padding:20px;width: calc( 100% - 20px) ;">
        <keep-alive :include="includeCompontents">
          <router-view style="width:100%"></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
  import leftMenu from '@/components/common/leftMenu/index.vue'
  import { mapState,mapGetters,mapActions} from 'vuex'

  export default {
    components: {
      leftMenu
    },
    data() {
      return {
        isMenu: true,
        // includeCompontents:this.$store.changeIncludeCompontents,
      }
    },
    computed:{
    ...mapState(['includeCompontents']),
    },
    mounted() {
      console.log('index.');
    },
  }
</script>

<style scoped>

</style>