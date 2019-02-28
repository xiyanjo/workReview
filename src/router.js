import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Index=()=>import('@/views/index/index')

const aboutRouter=()=>import('@/components/aboutRouter/index')
const routerViewLearn=()=>import('@/components/aboutRouter/routerViewLearn.vue')

// const aboutVuex=()=>import('@/components/aboutVuex/index')
const vuexPrimer=()=>import('@/components/aboutVuex/primer.vue')
const watchState=()=>import('@/components/aboutVuex/watchState.vue')

const faChildrenTransmission=()=>import('@/components/dataTransmission/faChildrenTransmission.vue')

const cssFilter=()=>import('@/components/cssEffect/cssFilter.vue')

const routes=[
    {
        name:'index',
        path:'/index',
        component:Index,
        children:[
            // 此种情况适用于模块又有公共部分时的路由模式----循环嵌套，可不考虑菜单数据
            {
                name:'aboutRouter',
                path:'/index/aboutRouter',
                component:aboutRouter,
                children:[
                    {
                        name:'routerViewLearn',
                        path:'/index/aboutRouter/routerViewLearn',
                        component:routerViewLearn,
                        children:[]
                    }
                ]
            },

            {
                name:'faChildrenTransmission',
                path:'/index/dataTransmission/faChildrenTransmission',
                component:faChildrenTransmission,
                children:[]
            },
            
            {
                name:'watchState',
                path:'/index/aboutVuex/watchState',
                component:watchState,
                children:[]
            },{
                name:'primer',
                path:'/index/aboutVuex/primer',
                component:vuexPrimer,
                children:[]
            },

            {
                name:'cssFilter',
                path:'/index/cssEffect/cssFilter',
                component:cssFilter,
                children:[]
            }
        ]
    },{
        path:'/',
        component:Index,
        children:[]
    },
]
const router = new VueRouter({
    mode:'history',
    // base: ProcessingInstruction.env.NODE_ENV==='production'?'review':'',
    routes
})
export default router;