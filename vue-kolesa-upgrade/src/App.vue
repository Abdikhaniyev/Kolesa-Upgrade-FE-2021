<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
        <div class="main-header__logo">
          <img src="./assets/images/logo.svg" alt="Brand logo" width="215" height="35" />
        </div>
        <div class="main-header__search search">
          <button class="search__button" type="button">
            <img src="./assets/images/search.svg" alt="search" />
          </button>
          <input class="search__input" type="text" name="search" placeholder="Поиск" />
        </div>
        <button class="main-header__user-menu user-menu">
          <img
            class="user-menu__avatar"
            src="./assets/images/avatar.png"
            alt="Avatar"
            width="44"
            height="44"
          />
          <div class="user-menu__contaner">
            <div class="user-menu__name">Мортиджан</div>
            <div class="user-menu__scores">300 баллов</div>
          </div>
        </button>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <nav class="main__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="#"> Оргсхема </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Kolesa <b>Team</b> </a>
            </li>
            <li class="nav__item">
              <a class="nav__link active" href="#"> Kolesa Shop </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Картина компании </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Новости </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Education </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Guidelines </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> Библиотека </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#"> FAQ </a>
            </li>
          </ul>
        </nav>

        <div class="main__content content">
          <div class="content__banner"></div>

          <div class="content__help-btns help-btns">
            <button class="btn btn--large btn--half-green help-btns__btn" type="button">
              Получить баллы
            </button>
            <button class="btn btn--large btn--half-yellow help-btns__btn" type="button">
              Как получить баллы
            </button>
            <button class="btn btn--large btn--half-blue help-btns__btn" type="button">
              Подарить баллы
            </button>
          </div>

          <div class="content__products products">
            <ul class="products__filter-list filter">
              <li class="products__filter-item" v-for="tab in tabs" :key="tab.id">
                <button
                  class="
                    btn btn--small
                    products__filter-btn
                    js__products__filter-btn
                  "
                  :class="[selectedTab === tab.value && 'active']"
                  @click="handleChangeTab(tab.value)"
                >
                  {{ tab.name }}
                </button>
              </li>
            </ul>

            <div class="products__container js__products__container">
              <div
                class="products__card card"
                v-for="item in products"
                :key="item.id"
                @click="handleOpenModal"
              >
                <div class="card__header">
                  <span class="card__badge" v-if="item.isNew">New</span>
                  <img
                    class="card__img"
                    :src="require(`./assets/images/${item.image}`)"
                    :alt="product"
                  />
                </div>
                <div class="card__body">
                  <div class="card__price">{{ item.price }} баллов</div>
                  <div class="card__name">
                    {{ item.title }}
                  </div>
                  <div class="card__size">Размеры {{ item.sizes }}</div>
                  <button type="button" class="card__action btn">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__left">
          <p class="footer__rights">&copy; Kolesa Group</p>
          <ul class="footer__socials">
            <li class="footer__social-item">
              <a class="footer__social-link" href="#">
                <img src="./assets/images/inst.svg" alt="instagram logo" />
              </a>
            </li>
            <li class="footer__social-item">
              <a class="footer__social-link" href="#">
                <img src="./assets/images/youtube.svg" alt="youtube logo" />
              </a>
            </li>
            <li class="footer__social-item">
              <a class="footer__social-link" href="#">
                <img src="./assets/images/vk.svg" alt="vk logo" />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__right">
          <p class="footer__text">
            Есть идеи что улучшить?<br />
            Не знаешь, с кем решить проблему?
          </p>
          <a class="footer__link" href="mailto:alisher147741@gmail.com">Написать</a>
        </div>
      </div>
    </footer>

    <div class="modal js__modal" v-if="modalIsShow">
      <div class="modal__images">
        <div class="modal__active-image js__modal__active-image">
          <img alt="active image" src="./assets/images/image_1.png" width="330" height="330" />
        </div>

        <div class="modal__all-images js__modal__all-images">
          <img
            class="modal__image"
            alt="image"
            src="./assets/images/image_5.png"
            width="50"
            height="50"
          />
          <img
            class="modal__image active"
            alt="image"
            src="./assets/images/image_6.png"
            width="50"
            height="50"
          />
          <img
            class="modal__image"
            alt="image"
            src="./assets/images/image_7.png"
            width="50"
            height="50"
          />
        </div>
      </div>

      <div class="modal__content">
        <div class="modal__content-top">
          <h2 class="modal__title js__modal__title">Футболка "Эволюционируй или сдохни"</h2>

          <span class="modal__scores js__modal__scores">100 баллов</span>

          <button class="btn btn--small btn--primary modal__action js__modal__action" type="button">
            Заказать
          </button>

          <div class="modal__balance">
            <div class="modal__balance-container">
              <span class="modal__balance-title"> Твой баланс: </span>
              <span class="modal__balance-value"> 3 945 баллов </span>
            </div>
          </div>
        </div>

        <div class="modal__content-bottom">
          <h3 class="modal__form-titles">Цвета:</h3>

          <div class="modal__form-group">
            <div class="modal__form-check custom-radio">
              <input
                class="custom-radio__input"
                type="radio"
                name="color"
                id="blue-color"
                checked
              />
              <label
                class="
                  custom-radio__label
                  custom-radio__label--preview
                  custom-radio__label--blue
                "
                for="blue-color"
              >
                Синий
              </label>
            </div>

            <div class="modal__form-check custom-radio">
              <input class="custom-radio__input" type="radio" name="color" id="beige-color" />
              <label
                class="
                  custom-radio__label
                  custom-radio__label--preview
                  custom-radio__label--beige
                "
                for="beige-color"
              >
                Бежевый
              </label>
            </div>

            <div class="modal__form-check custom-radio">
              <input class="custom-radio__input" type="radio" name="color" id="gray-color" />
              <label
                class="
                  custom-radio__label
                  custom-radio__label--preview
                  custom-radio__label--gray
                "
                for="gray-color"
              >
                Серый
              </label>
            </div>
          </div>

          <h3 class="modal__form-titles">Размер:</h3>

          <div class="modal__form-group">
            <div class="modal__form-check">
              <input class="custom-radio__input" type="radio" name="size" id="s-size" checked />
              <label class="custom-radio__label" for="s-size"> S </label>
            </div>

            <div class="modal__form-check">
              <input class="custom-radio__input" type="radio" name="size" id="m-size" />
              <label class="custom-radio__label" for="m-size"> M </label>
            </div>

            <div class="modal__form-check">
              <input class="custom-radio__input" type="radio" name="size" id="l-size" />
              <label class="custom-radio__label" for="l-size"> L </label>
            </div>
          </div>

          <h3
            class="
              modal__form-titles
              modal__form-titles--sm-margin
              modal__form-titles--bold
            "
          >
            Детали:
          </h3>
          <p class="modal__text js__modal_description"></p>

          <h3
            class="
              modal__form-titles
              modal__form-titles--sm-margin
              modal__form-titles--bold
            "
          >
            Как выбрать размер:
          </h3>
          <p class="modal__text">Написать дяде Рику для уточнения.</p>
        </div>
      </div>

      <button
        class="modal__close-btn js__modal__close-btn"
        type="button"
        @click="handleCloseModal"
      ></button>
    </div>
    <div class="overlay js__overlay" v-if="modalIsShow" @click="handleCloseModal"></div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      clothes: [
        {
          id: 0,
          title: 'Футболка "Эволюционируй или сдохни"',
          price: '220',
          sizes: 'S/M/L',
          image: 'product.png',
          isNew: true,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 1,
          title: 'Футболка "Не ссать"',
          price: '220',
          sizes: 'S/M/L',
          image: 'image_7.png',
          isNew: true,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 2,
          title: 'Футболка "Люди наше все"',
          price: '200',
          sizes: 'S/M/L',
          image: 'image_8.png',
          isNew: false,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 3,
          title: 'Футболка "Kolesa Group"',
          price: '210',
          sizes: 'S/M/L',
          image: 'image_1.png',
          isNew: false,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 4,
          title: 'Футболка "Пацан сказал, пацан сделал"',
          price: '215',
          sizes: 'S/M/L',
          image: 'product.png',
          isNew: false,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 5,
          title: 'Футболка "Успеем или нам п#здец"',
          price: '250',
          sizes: 'S/M/L',
          image: 'product.png',
          isNew: false,
          description:
            'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
      ],

      accessories: [
        {
          id: 6,
          title: 'Носочки "Kolesa Group"',
          price: '110',
          sizes: 'S/M/L',
          image: 'image_5.png',
          isNew: false,
          description:
            'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 7,
          title: 'Бутылка "Kolesa Group"',
          price: '60',
          sizes: 'S/M/L',
          image: 'image_6.png',
          isNew: true,
          description: 'Очень крутая бутылка от Kolesa Group',
        },
        {
          id: 8,
          title: 'Сумка "Kolesa Group"',
          price: '260',
          sizes: 'S/M/L',
          image: 'image_9.png',
          isNew: false,
          description: 'Очень крутая сумка от Kolesa Group',
        },
        {
          id: 9,
          title: 'Носочки "Kolesa Group"',
          price: '50',
          sizes: 'S/M/L',
          image: 'image_5.png',
          isNew: false,
          description:
            'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 10,
          title: 'Носочки "Kolesa Group"',
          price: '55',
          sizes: 'S/M/L',
          image: 'image_5.png',
          isNew: false,
          description:
            'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
        {
          id: 11,
          title: 'Носочки "Kolesa Group"',
          price: '90',
          sizes: 'S/M/L',
          image: 'image_5.png',
          isNew: false,
          description:
            'Брендированные носочки от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        },
      ],

      tabs: [
        {
          id: 1,
          name: 'Все товары',
          value: 'all',
        },
        {
          id: 2,
          name: 'Одежда',
          value: 'clothes',
        },
        {
          id: 3,
          name: 'Аксессуары',
          value: 'accessories',
        },
      ],
      selectedTab: 'all',
      modalIsShow: false,
      activeProducts: [],
    };
  },
  computed: {
    products: {
      get() {
        return this.sortProducts(this.activeProducts);
      },
      set(value) {
        this.activeProducts = value;
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.products = [...this.clothes, ...this.accessories];
    });
  },
  methods: {
    sortProducts(array) {
      return array.sort((a, b) => (a.isNew > b.isNew ? -1 : 1));
    },
    handleChangeTab(tab) {
      this.selectedTab = tab;

      if (tab === 'all') {
        this.products = [...this.clothes, ...this.accessories];
      } else if (tab === 'clothes') {
        this.products = this.clothes;
      } else if (tab === 'accessories') {
        this.products = this.accessories;
      }
    },
    handleOpenModal() {
      this.modalIsShow = true;
    },
    handleCloseModal() {
      this.modalIsShow = false;
    },
  },
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
