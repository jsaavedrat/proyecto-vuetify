<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <v-list :rutas="rutas">
          <v-list-item v-for="ruta in rutas" :key="ruta.value" :to="ruta.route">
            <v-list-item-title>{{ ruta.title }}</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
      
      <v-main>
        <RouterView />

      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { watch } from 'fs';
import { onMounted, ref } from 'vue';


const drawer = ref(false)
const group = ref(null)

const rutas = ref([
  {
    title: 'Home',
    value: 'home',
    route: '/'
  },
  {
    title: 'About',
    value: 'about',
    route: '/about'
  },
  {
    title: 'Ejemplos',
    value: 'ejemplo',
    route: '/ejemplo'
  },
  {
    title: 'Lista',
    value: 'lista',
    route: '/lista'
  },
])

</script>

<style scoped></style>