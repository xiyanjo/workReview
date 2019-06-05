<template>
  <div style="height:100%">
    <div style="background:blue;">总入口页面</div>
    <div class="flexDirectionRow" style="height:100%">
      <div class="flexDirectionRow">

        <left-menu v-if="isMenu" style="background:pink;"></left-menu>
        <div style="width:50px;background:pink">
          <div v-show="!isMenu" @click="isMenu=true">显示</div>
          <div v-show="isMenu" @click="isMenu=false">隐藏</div>
        </div>
      </div>
      <div style="background:#eee;padding:20px;width: calc( 100% - 20px) ;" id="newImg">
        <div @click="toImage">生产画布</div>
        <div class="imageWrapper" ref="imageWrapper">
            <img class="real_pic" :src="dataURL" />
            <slot>
              <div class="bg">我是图片</div>
              <div>我是图片</div>
              <div>我是图片</div>
              <div>我是图片</div>
              <div>我是图片</div>
            </slot>
          </div>
        </div>
        <keep-alive :include="includeCompontents">
          <router-view style="width:100%"></router-view>
        </keep-alive>
      </div>
  
  </div>
</template>

<script>
  import leftMenu from '@/components/common/leftMenu/index.vue'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  import html2canvas from 'html2canvas'

  export default {
    components: {
      leftMenu
    },
    data() {
      return {
        isMenu: true,
        // includeCompontents:this.$store.changeIncludeCompontents,
        dataURL: ''
      }
    },
    computed: {
      ...mapState(['includeCompontents']),
    },
    methods: {
      
      toImage() {
          html2canvas(this.$refs.imageWrapper,{
              backgroundColor: null
          }).then((canvas) => {
              let dataURL = canvas.toDataURL("image/png");
              this.dataURL = dataURL;
          });
      },
    },
    mounted() {
      console.log('index.');
    },
  }
</script>

<style scoped>
.bg{
  background: url("../../assets/img/twoDog.jpg") no-repeat
}
</style>