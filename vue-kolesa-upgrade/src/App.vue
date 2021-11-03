<template>
  <div id="app">
    <header class="main-header">
      <div class="container">
        <div class="main-header__logo">
          <img src="@/assets/images/logo.svg" alt="Brand logo" width="215" height="35" />
        </div>
        <Search />
        <UserMenu @get-user-data="getUserData" />
      </div>
    </header>

    <main class="main">
      <div class="container">
        <Sidebar />

        <div class="main__content content">
          <div class="content__banner"></div>

          <HotButtons />

          <div class="content__products products">
            <FilterCards :tabs="tabs" :selectedTab="selectedTab" @change-tab="handleChangeTab" />

            <div class="products__container js__products__container">
              <Card
                v-for="item in allProducts"
                :key="item.id"
                @open-modal="openModal(item)"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    <Modal
      :is-show-modal="isShowModal"
      @close-modal="closeModal"
      :cardData="modalData"
      :userData="userData"
    />
  </div>
</template>

<script>
import axios from '@/axios';

import Search from '@/components/Search.vue';
import UserMenu from '@/components/UserMenu.vue';
import Sidebar from '@/components/Sidebar.vue';
import HotButtons from '@/components/HotButtons.vue';
import FilterCards from '@/components/FilterCards.vue';
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Search,
    UserMenu,
    Sidebar,
    HotButtons,
    FilterCards,
    Card,
    Modal,
    Footer,
  },

  data() {
    return {
      clothes: [],
      accessories: [],

      userData: { name: '', score: 0 },

      modalData: {},

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
      isShowModal: false,
    };
  },

  computed: {
    allProducts() {
      if (this.selectedTab === 'all') {
        return this.sortProducts([...this.clothes, ...this.accessories]);
      }
      if (this.selectedTab === 'clothes') {
        return this.sortProducts([...this.clothes]);
      }
      if (this.selectedTab === 'accessories') {
        return this.sortProducts([...this.accessories]);
      }
      return [];
    },
  },

  mounted() {
    axios
      .get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothes = response.data;
      })
      .catch((error) => {
        console.log('Clothes loading error: ', error);
      });

    axios
      .get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessories = response.data;
      })
      .catch((error) => {
        console.log('Accessories loading error: ', error);
      });
  },

  methods: {
    getUserData(data) {
      this.userData = data;
    },

    sortProducts(array) {
      return array.sort((a, b) => (a.isNew > b.isNew ? -1 : 1));
    },

    handleChangeTab(tab) {
      this.selectedTab = tab;
    },

    openModal(data) {
      this.isShowModal = true;
      this.modalData = data;
    },

    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
