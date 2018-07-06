import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/resource',
    component: Layout,
    redirect: '/resource/example1',
    name: 'Resource',
    meta: { title: '资源管理', icon: 'ziyuan' },
    children: [
      {
        path: 'example1',
        name: 'Example1',
        component: () => import('@/views/example1/index'),
        meta: { title: 'Example1' }
      },
      {
        path: 'example2',
        name: 'Example2',
        component: () => import('@/views/example2/index'),
        meta: { title: 'Example2' }
      },
      {
        path: 'example3',
        name: 'Example3',
        component: () => import('@/views/example3/index'),
        meta: { title: 'Example3' }
      }
    ]
  },

  {
    path: '/apply',
    component: Layout,
    redirect: '/apply/example2',
    name: 'Apply',
    meta: { title: '应用管理', icon: 'yingyong' },
    children: [
      {
        path: 'example1',
        name: 'Example1',
        component: () => import('@/views/example1/index'),
        meta: { title: 'Example1' }
      },
      {
        path: 'example2',
        name: 'Example2',
        component: () => import('@/views/example2/index'),
        meta: { title: 'Example2' }
      },
      {
        path: 'example3',
        name: 'Example3',
        component: () => import('@/views/example3/index'),
        meta: { title: 'Example3' }
      }
    ]
  },

  {
    path: '/repository',
    component: Layout,
    redirect: '/repository/example3',
    name: 'Repository',
    meta: { title: '版本库', icon: 'banben' },
    children: [
      {
        path: 'example1',
        name: '风险命令库',
        component: () => import('@/views/scriptLibrary/index'),
        meta: { title: '风险命令库' }
      },
      {
        path: 'script',
        name: '脚本库',
        component: () => import('@/views/scriptLibrary/index'),
        meta: { title: '脚本库' }
      },
      {
        path: 'example2',
        name: 'Example2',
        component: () => import('@/views/example2/index'),
        meta: { title: 'Example2' }
      },
      {
        path: 'example3',
        name: 'Example3',
        component: () => import('@/views/example3/index'),
        meta: { title: 'Example3' }
      },
      {
        path: 'script-file',
        name: '脚本库-文件',
        component: () => import('@/views/file/index'),
        hidden: true
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

