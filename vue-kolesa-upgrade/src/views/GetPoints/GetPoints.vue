<template>
  <div class="get-points">
    <Breadcrumbs :links="links" />

    <h2 class="get-points__title">Как получить баллы</h2>

    <div class="get-points__container">
      <Card v-for="data in tasks" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/views/GetPoints/components/Breadcrumbs.vue';
import Card from '@/views/GetPoints/components/Card.vue';

export default {
  name: 'GetPoints',
  components: {
    Breadcrumbs,
    Card,
  },
  data() {
    return {
      links: [
        { title: 'Kolesa Shop', url: '/' },
        { title: 'Как получить баллы', url: '/getPoints' },
      ],

      tasks: [
        {
          id: 1,
          icon: '@/assets/images/icon.svg',
          title: 'Выступление на конференциях',
          score: '90',
          description: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          id: 2,
          icon: '@/assets/images/icon_2.svg',
          title: 'Выступление на meetup',
          score: '60',
          description:
            'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          id: 3,
          icon: '@/assets/images/icon_3.svg',
          title: 'Статья на habr/vc.ru/rusbase',
          score: '60',
          description:
            'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          id: 4,
          icon: '@/assets/images/icon_4.svg',
          title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          score: '60',
          description:
            'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          id: 5,
          icon: '@/assets/images/icon_5.svg',
          title: 'Организация мероприятия',
          score: '60',
          description:
            'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
      ],
    };
  },
};
</script>
