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
        <svg-icon icon-class="logo" :style="{ transform: 'scale(1.6)', marginRight: '10px' }"/> 上证信息运维自动化平台
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

<style rel="stylesheet/scss" lang="scss" scoped>
.logo-container {
  padding-left: 20px;
  color: #ffffff;
  background-color: #002140;
  height: 64px;
  line-height: 64px;
  box-shadow: 0 2px 7px 0 rgba(0,21,41,0.03);
}
</style>
