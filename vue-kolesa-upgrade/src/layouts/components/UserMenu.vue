<template>
  <button class="main-header__user-menu user-menu">
    <img class="user-menu__avatar" :src="userInfo.avatarUrl" alt="Avatar" width="44" height="44" />
    <div class="user-menu__contaner">
      <div class="user-menu__name">{{ name }}</div>
      <div class="user-menu__scores">{{ score }}</div>
    </div>
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserMenu',
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),

    name() {
      return this.userInfo.name ? this.userInfo.name : '';
    },

    score() {
      return this.userInfo.score ? `${this.userInfo.score} баллов` : '';
    },
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
};
</script>
