<template>
  <div class="products__card card">
    <div class="card__header">
      <span class="card__badge" v-if="item.isNew">New</span>
      <img class="card__img" :src="item.mainImage" alt="product" />
    </div>
    <div class="card__body">
      <div class="card__price">{{ item.price }} баллов</div>
      <div class="card__name">
        {{ item.title }}
      </div>
      <div class="card__size">
        {{ item.sizes && item.sizes.length ? `Размеры ${String(item.sizes)}` : '' }}
      </div>
      <button type="button" class="card__action btn" @click="$emit('open-modal')">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
  },
};
</script>

<style></style>
