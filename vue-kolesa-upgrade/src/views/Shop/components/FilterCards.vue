<template>
  <ul class="products__filter-list filter">
    <li class="products__filter-item" v-for="tab in tabs" :key="tab.id">
      <button
        class="btn btn--small products__filter-btn js__products__filter-btn"
        :class="[selectedTab === tab.value && 'active']"
        @click="handleChangeTab(tab.value)"
      >
        {{ tab.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FilterCards',
  props: {
    selectedTab: String,
    tabs: Array,
  },
  methods: {
    handleChangeTab(tab) {
      this.$emit('change-tab', tab);
    },
  },
};
</script>

<style></style>
