<template>
  <div>

    
    <div style="background:#ccc"> 
      <div>基础父子组件学习</div>
      <div>{{'父（title）'+title}}</div>
      <button @click="title2='newTitle2'">父（改变title2）</button>
      <button @click="size='newTitle2'">父（改变size）</button>
      <children-base :fromChildTitle="title" :fromChildTitle2="title2" style="background:#c6c9cc;"
        @onChangeTitle="handleTitleChange"></children-base>
    </div>

    <div class="line"></div>

    <div style="background:#ccc">
      <div>使用is动态组件及非prop显示在根或元素上设置</div>
      <ul style="    display: flex;justify-content: space-around;">
        <li v-for="(item,index) in tabDatas" @click="emitFaComponentId(item.name)">
          <button>{{item.name}}</button>
        </li>
      </ul>
      <component style="background:#e4bdf1" :is="faComponentId" :size="size"></component>
    </div>
    
    <div class="line"></div>

    <p style="color:red">
      1 prop:父中数据改变--子改变，子改变父---事件传递给父（不可以直接改变）
      <br>
      2 非prop:显示在子的根元素上的属性，在子中通过 this.$el.getAttribute('size')取到
      <br>
      待解决问题：
      <br>
      1 动态组件如何注册  Vue.component('aa',()=>import('@/components/'+aa+'.vue'))   ---ok--- 
      <br>
      2 动态组件传参问题？
      3 非prop属性如何使用？
      3 less文件加载问题？

    </p>

    

  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  import Vue from 'vue'
  import childrenBase from '@/components/dataTransmission/components/childrenBase.vue'

  export default {
    data() {
      return {
        title: '*faTitle*',
        title2: '*faTitle2*',
        size: '*SIZE*',
        tabDatas: [{ //子组件
          name: 'noPropEle',
        }, {
          name: 'noPropRoot',
        }],

      }
    },
    components: {
      childrenBase,
    },
    computed: {
      ...mapState(['faComponentId', ]),
    },
    methods: {
      handleTitleChange(val) {
        this.title += val;
      },
      emitFaComponentId(name) {
        this.$store.commit('changeFaComponentId', name); //只能缓存一个同名组件
        this.registerComponent(name); //注册组件
      },

      //  @desc 统一加载注册组件资源
      registerComponent(templateName) {
        Vue.component(templateName, () => import("@/components/dataTransmission/components/" + templateName + ".vue"));
      },

    }
  }
</script>

<style scoped>
  .line{
    width:100%;
    height:1px;
    background:#666;
    margin:40px 0;

  }

</style>