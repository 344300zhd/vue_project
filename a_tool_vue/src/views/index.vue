<template>
  <div class="box">
    <div class="left">
      <a-menu
        class="menu"
        mode="inline"
        theme="dark"
        :default-selected-keys="[current]"
        @click="selectMenuItem">
        <a-menu-item v-for="item in menuList" :key="item.key">
          <a-icon :type="item.icon" style="font-size: 24px"></a-icon>
          <span>{{ item.title }}</span>
          <router-link :to="item.path"></router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="right">
      <div class="title">
        <a-dropdown class="theme">
          <span class="text">主题</span>
          <a-menu slot="overlay" @click="changeTheme">
            <a-menu-item key="default">默认主题</a-menu-item>
            <a-menu-item key="light">亮色主题</a-menu-item>
            <a-menu-item key="dark">深色主题</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import menuList from "../assets/config/menu";
export default {
  data() {
    return {
      menuList: menuList,
      current: "submit",
    };
  },
  methods: {
    selectMenuItem(val) {
      this.current = val.key;
    },
    /** 选择主题 **/
    changeTheme({key}){
      window.document.documentElement.setAttribute("data-theme",key)
      console.log(key);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_theme.scss";
@import "@/assets/theme/mixin.scss";
.box {
  width: 100vw;
  display: flex;
  .left {
    .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
      background: rgb(135, 217, 230);
    }
    .menu {
      height: 100%;
      min-height: 100vh;
      @include theme($theme-default);
    }
  }
  .right{
    margin-left: 10px;
    width: 100%;
    overflow: hidden;
    .title{
      // 主题文件
      @include theme($theme-default);
      color: #fff;
      cursor: pointer;
      width: 100%;;
      height: 50px;
      box-shadow: 0 0 5px #ccc;
      position: relative;
      .theme{
        font-weight: bold;
        line-height: 50px;
        position: absolute;
        right: 20px;
      }
    }
    .content {
      width: 100%;
      margin-top: 10px;
      box-shadow: 0 0 5px #ccc;
      min-height: calc(100% - 60px);
    }
  }
}
</style>