<template>
    <div>
        <h1 :style="{color: colorh1}">Ejemplo v-bind</h1>
        <input placeholder="inserte nombre" v-model="nombre">
        
        <span> Nombre: {{ nombre }}</span>
        <div>
        <span v-if="nombre.length == 6">el nombre tiene 6letras </span>

        </div>
        <div>
            <li v-for="item in lista">{{ item }}</li>. 

        </div>
        <div v-html="parrafo"></div>
        
Componente ejemplo

    </div>
    <slot name="parrafo"></slot>
    <img :src="imagenUrl">. 
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import imagenUrl from "@/assets/logo.svg";
const colorh1 = ref('red')
const nombre = ref('')
const parrafo = ref('<p style="color: red;">Ejemplo de v-html</p>')
const lista = ref([1,2,3,4,5])
const booksData = ref<{ id: number; title: string; authors: { name: string; birth_year: number; death_year: number }[]; copyright: boolean }[]>([]);

const fetchData = async () => {
  try {
    const response = await fetch('/json/fantasy-books.json');
    const data = await response.json();
    booksData.value = data.results;
    console.log(booksData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
onMounted(() => {
    fetchData()
})
</script>

<style scoped>

</style>