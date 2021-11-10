<template>
  <div class="content__help-btns help-btns">
    <router-link to="/" class="btn btn--large btn--half-green help-btns__btn">
      Получить баллы
    </router-link>
    <router-link to="/getPoints" class="btn btn--large btn--half-green help-btns__btn">
      Как получить баллы
    </router-link>
    <router-link to="/" class="btn btn--large btn--half-green help-btns__btn">
      Подарить баллы
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotButtons',
};
</script>
