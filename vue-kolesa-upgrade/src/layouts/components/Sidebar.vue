<template>
  <nav class="main__nav nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/org_chart" class="nav__link" active-class="active">
          Оргсхема
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/team" class="nav__link" active-class="active">
          Kolesa <b>Team</b>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/" exact class="nav__link" active-class="active">
          Kolesa Shop
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/company_picture" class="nav__link" active-class="active">
          Картина компании
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/news" class="nav__link" active-class="active"> Новости </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/education" class="nav__link" active-class="active">
          Education
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/guidelines" class="nav__link" active-class="active">
          Guidelines
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/library" class="nav__link" active-class="active">
          Библиотека
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/faq" class="nav__link" active-class="active"> FAQ </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
