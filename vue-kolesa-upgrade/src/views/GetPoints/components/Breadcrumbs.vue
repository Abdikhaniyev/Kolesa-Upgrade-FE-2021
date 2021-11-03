<template>
  <div class="breadcrumbs">
    <router-link
      v-for="(link, i) in links"
      :key="i"
      :to="link.url"
      class="breadcrumbs__link"
      active-class="active"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    links: Array,
  },
};
</script>
