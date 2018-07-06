<template>
  <div class="container">
    <div class="content">
      <!-- 文件顶部的工具条 -->
      <div class="tool-bar">
        <div>
          <el-select
            v-model="branch"
            size="small"
            placeholder="请选择">
            <el-option
              v-for="item in branchOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button size="small" icon="el-icon-plus"></el-button>
        </div>
        <div class="button-group">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger" plain>删除</el-button>
        </div>
      </div>
      <!-- 文件展示部分 -->
      <div class="file-container">
        <div class="file-info">17kb</div>
        <div class="file-content" id="file-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

export default {
  data() {
    return {
      branch: 'master',
      branchOptions: [{
        value: 'master',
        label: 'master'
      }, {
        value: 'develop',
        label: 'develop'
      }, {
        value: 'test',
        label: 'test'
      }],
      fileContent: "import router from './router'↵import store from './store'↵import NProgress from 'nprogress' // Progress 进度条↵import 'nprogress/nprogress.css'// Progress 进度条样式↵import { Message } from 'element-ui'↵import { getToken } from '@/utils/auth' // 验权↵↵const whiteList = ['/login'] // 不重定向白名单↵router.beforeEach((to, from, next) => {↵  NProgress.start()↵  if (getToken()) {↵    if (to.path === '/login') {↵      next({ path: '/' })↵      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it↵    } else {↵      if (store.getters.roles.length === 0) {↵        store.dispatch('GetInfo').then(res => { // 拉取用户信息↵          next()↵        }).catch((err) => {↵          store.dispatch('FedLogOut').then(() => {↵            Message.error(err || 'Verification failed, please login again')↵            next({ path: '/' })↵          })↵        })↵      } else {↵        next()↵      }↵    }↵  } else {↵    if (whiteList.indexOf(to.path) !== -1) {↵      next()↵    } else {↵      next('/login')↵      NProgress.done()↵    }↵  }↵})↵↵router.afterEach(() => {↵  NProgress.done() // 结束Progress↵})↵"
    }
  },
  mounted() {
    CodeMirror(document.getElementById('file-content'), {
      value: this.fileContent.replace(/↵/g, '\n'),
      mode: 'javascript',
      lineNumbers: true
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.container {
  padding: 24px;
  background-color: $pageBg;
  height: 100%;
}
.content {
  background-color: $white;
  border-radius: 2px;
  padding: 28px 33px;
  height: 100%;
}
.tool-bar {
  display: flex;
  justify-content: space-between;
}
.file-container {
  margin-top: 32px;
}
</style>
