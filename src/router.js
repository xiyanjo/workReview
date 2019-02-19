import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Index=()=>import('@/views/index/index')

const aboutRouter=()=>import('@/components/aboutRouter/index')
const routerViewLearn=()=>import('@/components/aboutRouter/routerViewLearn.vue')

const vuexPrimer=()=>import('@/components/aboutVuex/primer.vue')

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
            },{
                name:'primer',
                path:'/index/primer',
                component:vuexPrimer,
                children:[]
            },
        ]
    },
]
const router = new VueRouter({
    mode:'history',
    // base: ProcessingInstruction.env.NODE_ENV==='production'?'review':'',
    routes
})
export default router;