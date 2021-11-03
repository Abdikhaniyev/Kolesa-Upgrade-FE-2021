<template>
  <div>
    <div class="modal js__modal" v-if="isShowModal">
      <div class="modal__images">
        <div class="modal__active-image js__modal__active-image">
          <img alt="active image" :src="cardData.mainImage" width="330" height="330" />
        </div>

        <div class="modal__all-images js__modal__all-images">
          <img
            v-for="img in [cardData.mainImage, ...cardData.images]"
            :key="img.key"
            class="modal__image"
            alt="image"
            :src="img"
            width="50"
            height="50"
          />
        </div>
      </div>

      <div class="modal__content">
        <div class="modal__content-top">
          <h2 class="modal__title js__modal__title">{{ cardData.title }}</h2>

          <span class="modal__scores js__modal__scores">{{ cardData.price }} баллов</span>

          <button
            @click="order"
            class="btn btn--small btn--primary modal__action js__modal__action"
            type="button"
          >
            Заказать
          </button>

          <div class="modal__balance">
            <div class="modal__balance-container">
              <span class="modal__balance-title"> Твой баланс: </span>
              <span class="modal__balance-value"> {{ userData.score }} баллов </span>
            </div>
          </div>
        </div>

        <div class="modal__content-bottom">
          <h3 class="modal__form-titles" v-if="cardData.colors && cardData.colors.length">
            Цвета:
          </h3>

          <div class="modal__form-group">
            <div
              class="modal__form-check custom-radio"
              v-for="(color, index) in cardData.colors"
              :key="color.id"
            >
              <input class="custom-radio__input" type="radio" name="color" :id="`color-${index}`" />
              <label
                class="custom-radio__label custom-radio__label--preview"
                :class="{
                  'custom-radio__label--blue': color.label === 'Синий',
                  'custom-radio__label--black': color.label === 'Черный',
                  'custom-radio__label--beige': color.label === 'Бежевый',
                  'custom-radio__label--gray': color.label === 'Серый',
                  'custom-radio__label--azure': color.label === 'Голубой',
                  'custom-radio__label--red': color.label === 'Красный',
                }"
                :for="`color-${index}`"
              >
                {{ color.label }}
              </label>
            </div>
          </div>

          <h3 class="modal__form-titles" v-if="cardData.sizes && cardData.sizes.length">Размер:</h3>

          <div class="modal__form-group">
            <div class="modal__form-check" v-for="(size, index) in cardData.sizes" :key="size.id">
              <input class="custom-radio__input" type="radio" name="size" :id="`size-${index}`" />
              <label class="custom-radio__label" :for="`size-${index}`"> {{ size }} </label>
            </div>
          </div>

          <h3
            class="modal__form-titles modal__form-titles--sm-margin modal__form-titles--bold"
            v-if="cardData.description"
          >
            Детали:
          </h3>
          <p class="modal__text js__modal_description">{{ cardData.description }}</p>

          <h3 class="modal__form-titles modal__form-titles--sm-margin modal__form-titles--bold">
            Как выбрать размер:
          </h3>
          <p class="modal__text">Написать дяде Рику для уточнения.</p>
        </div>
      </div>

      <button
        class="modal__close-btn js__modal__close-btn"
        @click="closeModal"
        type="button"
      ></button>
    </div>
    <div class="overlay js__overlay" v-if="isShowModal" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isShowModal: Boolean,
    cardData: Object,
    userData: Object,
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },

    order() {
      if (this.userData.score >= this.cardData.price) {
        this.userData.score -= this.cardData.price;
      } else {
        alert('Поработай и приходи обратно когда будут деньги! ❤️');
      }
    },
  },
};
</script>

<style></style>
