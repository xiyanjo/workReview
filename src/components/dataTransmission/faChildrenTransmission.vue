<template>
  <div>


    <template style="background:#ccc">
      <div>基础父子组件学习</div>
      <div>{{'父（title）'+title}}</div>
      <button @click="title2='newTitle2'">父（改变title2）</button>
      <button @click="size='newTitle2'">父（改变size）</button>
      <children-base :fromChildTitle="title" :fromChildTitle2="title2" style="background:#c6c9cc;" @onChangeTitle="handleTitleChange"></children-base>
    </template>

    <div class="line"></div>

    <template style="background:#ccc">
      <div>使用is动态组件及非prop显示在根或元素上设置</div>
      <template>
        <!-- tab页 -->
        <ul style="    display: flex;justify-content: space-around;">
          <li v-for="(item,index) in tabDatas" @click="emitFaComponentId(item.name)">
            <button>{{item.name}}</button>
          </li>
        </ul>
      </template>
      <!-- 动态组件 非prop属性 $attr传参 -->
      <!-- v-on:focus.native="onFocus---根元素内为input时不能监听" -->
      <component style="background:#e4bdf1" :is="faComponentId" :size="size" :formData="formData" :tabDatas="tabDatas"
        :dynamicAttrsData="dynamicAttrsData" @input="onInput" @blur="onBlur" @change="onChange"></component>
    </template>

    <div class="line"></div>

    <!-- element-ui 模拟学习 -->
    <!-- <template> 
      <div>
        <el-input v-model="formData.value" @input="onInput"></el-input>
      </div>
    </template> -->

    <template style="color:blue">
      1 prop:父中数据改变--子改变，子改变父---事件传递给父（不可以直接改变）
      <br>
      2 非prop:显示在子的根元素上的属性，在子中通过 this.$el.getAttribute('size')取到
      <br>
    </template>
    <template style="color:red">
      <div>已解决问题：</div>
      <p>
        1 动态组件如何注册 Vue.component('aa',()=>import('@/components/'+aa+'.vue')) ---ok---
        2 $attrs---可以放在任意元素上--可以取到所有非prop属性的对象
        3 $listeners ---- 在组件根元素上监听或改写组件内input事件
      </p>

      <div class="line"></div>

      <div> 待解决问题：</div>
      <p>
        2 动态组件传参问题: a)使用非prop传参-—--$attrs统一获取
        3 非prop属性如何使用？
        3 less文件加载问题？
        4 组件 表单 输入框验证如何写
      </p>
    </template>

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
        size: '*非prop属性--SIZE*',
        tabDatas: [{ //子组件
          name: 'noPropEle',
        }, {
          name: 'noPropRoot',
        }, {
          name: 'listenerInput',
        }],
        dynamicAttrsData: 'dynamicAttrsData',
        formData: {
          label: '姓名',
          value: '',
        },
        inputVal: ''

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
      // 格式input
      onInput(val) {
        console.log('onInput', val);
        this.$set(this.formData, 'value', val + 'aa')
      },
      onBlur(val) {
        console.log('onBlur', val);
      },
      onChange(val) {
        console.log('onChange', val);
      }
    },
    created() {
      this.registerComponent(this.faComponentId);
    }
  }
</script>

<style scoped>
  .line {
    width: 100%;
    height: 1px;
    background: #666;
    margin: 40px 0;

  }
</style>