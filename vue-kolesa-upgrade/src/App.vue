<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
        <div class="main-header__logo">
          <img src="@/assets/images/logo.svg" alt="Brand logo" width="215" height="35" />
        </div>
        <Search />
        <UserMenu />
      </div>
    </header>

    <main class="main">
      <div class="container">
        <Sidebar />

        <router-view></router-view>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Search from '@/layouts/components/Search.vue';
import UserMenu from '@/layouts/components/UserMenu.vue';
import Sidebar from '@/layouts/components/Sidebar.vue';
import Footer from '@/layouts/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Search,
    UserMenu,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
