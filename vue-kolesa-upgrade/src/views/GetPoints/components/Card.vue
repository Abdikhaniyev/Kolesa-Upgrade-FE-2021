<template>
  <div class="get-points-card">
    <img src="@/assets/images/icon.svg" alt="icon" class="get-points-card__icon" />
    <h3 class="get-points-card__title">{{ data.title }}</h3>
    <span class="get-points-card__score">{{ data.score }} баллов</span>
    <p class="get-points-card__description">{{ data.description }}</p>
    <button class="get-points-card__button btn">Отправить заявку</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object,
  },
};
</script>
