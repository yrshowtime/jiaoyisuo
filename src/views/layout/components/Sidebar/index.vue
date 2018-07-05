<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#001529"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <div class="el-submenu__title logo-container">
        <svg-icon icon-class="logo" :style="{ transform: 'scale(1.6)', marginRight: '10px' }"/>
        <span>上证信息运维自动化平台</span>
      </div>
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
