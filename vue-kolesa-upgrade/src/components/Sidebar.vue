<template>
  <nav class="main__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 0 }"
          @click="handleChange(0)"
          href="#"
        >
          Оргсхема
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 1 }"
          @click="handleChange(1)"
          href="#"
        >
          Kolesa <b>Team</b>
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 2 }"
          @click="handleChange(2)"
          href="#"
        >
          Kolesa Shop
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 3 }"
          @click="handleChange(3)"
          href="#"
        >
          Картина компании
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 4 }"
          @click="handleChange(4)"
          href="#"
        >
          Новости
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 5 }"
          @click="handleChange(5)"
          href="#"
        >
          Education
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 6 }"
          @click="handleChange(6)"
          href="#"
        >
          Guidelines
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 7 }"
          @click="handleChange(7)"
          href="#"
        >
          Библиотека
        </a>
      </li>
      <li class="nav__item">
        <a
          class="nav__link"
          :class="{ active: selectedTab === 8 }"
          @click="handleChange(8)"
          href="#"
        >
          FAQ
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      selectedTab: 2,
    };
  },
  methods: {
    handleChange(index) {
      this.selectedTab = index;
    },
  },
};
</script>

<style></style>
