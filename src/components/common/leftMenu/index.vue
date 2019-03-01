<template>
  <div style="background:#eee;padding:10px">
    <template>
      <div v-for="item in leftMenuData">

        <div v-if="item.children && item.children.length>0">
          <div class="bottomPad10"> {{item.name}}</div>
          <div class="bottomPad10" v-for="each in item.children">
            <!-- 三层菜单 -->
            <!-- <div v-if="each.children && each.children.length>0">
                <div v-for="little in each.children">
                  <div> {{little.name}}</div>
                </div>
              </div> -->
            <router-link class="leftPad40" :to="each.path" v-if="!each.children ||  each.children.length<1">
              {{each.name}}
            </router-link>
          </div>
        </div>
        <div class="bottomPad10" v-if="!item.children ||  item.children.length<1">
          <router-link :class="item.active?'active':''" :to="item.path" @click="handleMenuChange(item)" >{{item.name }}</router-link>
        </div>
      </div>

    </template>

  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        isCollapse: true,
  
        leftMenuData: [{
          name: 'aboutVuex',
          path: '/aboutVuex',
          children: [{
            name: 'primer',
            path: '/index/aboutVuex/primer',
          },{
            name: 'watchState',
            path: '/index/aboutVuex/watchState',
          },]
        },
        {  
          name: 'cssEffect',
          path: '/cssEffect',
          children: [{
            name: 'cssFilter',
            path: '/index/cssEffect/cssFilter',
          },]
        }, 
        {
          name: 'aboutRouter',
          path: '/aboutRouter',
          children: [{
              name:'routerViewLearn',
              path:'/index/aboutRouter/routerViewLearn',
            }]
        },
        {
            name:'dataTransmission',
            path:'/index/dataTransmission',
            children:[{
              name:'faChildrenTransmission',
              path:'/index/dataTransmission/faChildrenTransmission',
            }]
          },
        {
            name:'promiseIndex',
            path:'/index/promiseEs6/promiseIndex',
            children:[{
              name:'promiseIndex',
              path:'/index/promiseEs6/promiseIndex',
            }]
          },

        ]
      };
    },
    methods: {
      handleMenuChange(item){
        item.active=true;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped>
.router-link-active{
  color:deeppink
}
a{
  color:#666
}

</style>