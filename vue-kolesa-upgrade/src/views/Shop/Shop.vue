<template>
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
    <Modal :is-show-modal="isShowModal" @close-modal="closeModal" :cardData="modalData" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import HotButtons from '@/views/Shop/components/HotButtons.vue';
import FilterCards from '@/views/Shop/components/FilterCards.vue';
import Card from '@/views/Shop/components/Card.vue';
import Modal from '@/views/Shop/components/Modal.vue';

export default {
  name: 'Shop',
  components: {
    HotButtons,
    FilterCards,
    Card,
    Modal,
  },

  data() {
    return {
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
    ...mapState({
      clothes: 'clothes',
      accessories: 'accessories',
    }),

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
    this.$store.dispatch('fetchClothes');
    this.$store.dispatch('fetchAccessories');
  },

  methods: {
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
