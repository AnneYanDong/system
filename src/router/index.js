import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import activePublic from '@/pages/activePublic'
import activeManage from '@/pages/activeManage'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/',
        component: activePublic
    }, {
        path: '/',
        component: activeManage
    }]
})