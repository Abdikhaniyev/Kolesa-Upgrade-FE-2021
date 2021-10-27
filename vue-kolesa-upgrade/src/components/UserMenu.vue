<template>
  <button class="main-header__user-menu user-menu">
    <img
      class="user-menu__avatar"
      src="@/assets/images/avatar.png"
      alt="Avatar"
      width="44"
      height="44"
    />
    <div class="user-menu__contaner">
      <div class="user-menu__name">{{ userData.name }}</div>
      <div class="user-menu__scores">{{ userData.score }} баллов</div>
    </div>
  </button>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'UserMenu',
  data() {
    return {
      userData: { name: '', score: 0 },
    };
  },
  mounted() {
    axios
      .get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.userData = response.data;
        this.getUserData();
      })
      .catch((error) => {
        console.log('User loading error: ', error);
      });
  },
  methods: {
    getUserData() {
      this.$emit('get-user-data', this.userData);
    },
  },
};
</script>

<style></style>
