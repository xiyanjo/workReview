import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //初始化state
    count:10,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],
    actionCount:'2',
    includeCompontents:'',
    faComponentId:'noPropEle',
};
const getters = {   //处理state衍生状态
    filterTodos: state=>{
        return state.todos.filter(todo=>{
            if(todo.id>=2){
                return todo//无法返回todo.id
            }
        });
    }
};
const mutations = { //初始化改变state中数据方法
    increaseCount(state){
        state.count+=4;
    },
    reduceCount(state,n){
        state.count-=n;
    },
    changeTodos(state){
        state.todos.push({ id: state.count, text: '...', done: true})
    },
    changeActionCount(state,arr){
        state.actionCount+=arr.name;
    },
    changeIncludeCompontents(state,component){//keep-alive 缓存主页面
        state.includeCompontents=component;
    },
    changeFaComponentId(state,id){//父子组件传递功能中 动态切换子组件
        state.faComponentId=id;
    },
};
 const actions = { //异步 调用mution中方法改变state   定义异步调用的方法
    changeActionCountAsync({ commit },arr){
        setTimeout(()=>{
            // context.commit('changeActionCount')//context和store有相同的属性和方法
            commit('changeActionCount',arr)//context和store有相同的属性和方法
        },2000)
    },
    //actionB依赖actionA执行结果
    actionA(){ //返回promise对象1500秒后执行resolve
        return new Promise((resolve,reject)=>{
            let a = true;
            setTimeout(()=>{
                if(a){
                    resolve();
                }else{
                    reject();
                }
            },1500)
        })
    },
    actionB({ dispatch, commit },arr){
        return dispatch('actionA').then(()=>{
            commit('changeActionCount',arr)
        })
    }
    
};
  const store = new Vuex.Store({
       state,
       getters,
       mutations,
       actions
});
export default store;