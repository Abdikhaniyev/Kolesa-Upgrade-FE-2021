<template>
  <div class="main-header__search search">
    <button class="search__button" type="button">
      <img src="@/assets/images/search.svg" alt="search" />
    </button>
    <input
      class="search__input"
      type="text"
      name="search"
      placeholder="Поиск"
      @input="handleChangeSearch"
      v-model="searchValue"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    handleChangeSearch(e) {
      this.searchValue = e.target.value;
    },
  },
};
</script>

<style></style>
