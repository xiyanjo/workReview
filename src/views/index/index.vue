<template>
  <div >
    <div style="background:blue;">总入口页面</div>
    <div style="display:flex;flex-direction:col;">
      <left-menu></left-menu>
      <!-- <component :is="currentTabComponent"></component> -->
      <!-- <keep-alive :include="['home']"> -->
      <router-view style="border:2px solid pink"></router-view >
      <!-- </keep-alive>  -->
    </div>

  </div>
</template>

<script>
  import home from '@/components/home.vue'
  import leftMenu from '@/components/common/leftMenu/index.vue'

  export default {
    components: {
      home,
      leftMenu
    },
    data() {
      return {
        currentTabComponent: 'home',
      }
    },
    mounted() {
      // this.$router.push('/home')
      console.log('index.');
    },
  }
</script>

<style>

</style>