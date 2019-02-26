import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //初始化state
    count:100,
};
const getters = {   //处理state衍生状态
   
};
const mutations = { //初始化改变state中数据方法
    increaseCount(state){
        state.count+=4;
    },
    reduceCount(state,n){
        state.count-=n;
    }
};
 const actions = { //异步 调用mution中方法改变state
   
};
  const store = new Vuex.Store({
       state,
       getters,
       mutations,
       actions
});
export default store;