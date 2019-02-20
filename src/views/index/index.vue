<template>
  <div>
    <div style="background:blue;">总入口页面</div>
    <div style="display:flex;flex-direction:col;">
      <div style="display:flex;flex-direction:col;">

        <left-menu v-if="isMenu" style="background:#eee;"></left-menu>
        
        <div style="width:150px">
          <div v-show="!isMenu" @click="isMenu=true">显示</div>
          <div v-show="isMenu" @click="isMenu=false">隐藏</div>
        </div>
      </div>
      <router-view style="width:100%"></router-view>
    </div>

  </div>
</template>

<script>
  import leftMenu from '@/components/common/leftMenu/index.vue'

  export default {
    components: {
      leftMenu
    },
    data() {
      return {
        isMenu: true,
      }
    },
    mounted() {
      console.log('index.');
    },
  }
</script>

<style scoped>

</style>