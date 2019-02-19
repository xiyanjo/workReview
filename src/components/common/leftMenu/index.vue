<template>
  <div style="background:yellowgreen;padding:10px">
    <template>
        <div v-for="item in leftMenuData">
          
          <div v-if="item.children && item.children.length>0">
            <div> {{item.name}}</div>
            <div v-for="each in item.children">
              <!-- 三层菜单 -->
              <!-- <div v-if="each.children && each.children.length>0">
                <div v-for="little in each.children">
                  <div> {{little.name}}</div>
                </div>
              </div> -->
              <router-link :to="each.path" v-if="!each.children ||  each.children.length<1"> {{each.name+'>>>'+ each.path}}</router-link>
            </div>
          </div>
          <div v-if="!item.children ||  item.children.length<1">
            <router-link :to="item.path">{{item.name +'>>>' + item.path}}</router-link>
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
        leftMenuData:[
          {
            name:'aboutVuex',
            path:'/aboutVuex',
            children:[
                {
                    name:'primer',
                    path:'/index/primer',
                    children:[]
                }
            ]
          },{
            name:'aboutVuex2',
            path:'/aboutVuex3',
            children:[]
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style>


</style>