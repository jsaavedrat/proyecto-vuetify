<template>
    <div>
        <h1>Pinea</h1>
        <div> <button @click="incrementCount"> Incrementar</button> {{ contar }}</div>
        <div> {{ counterStore.doubleCount }}</div>
    </div>
    <div>
        <h1>LocalStorage</h1>
        <button @click="counterStore.guardarResultadoEnLocalStorage">Guardar en localStorage</button><br>
        <button @click="counterStore.resultadoGuardado">
            Mostrar localStorage</button>

        <p>Resultado almacenado: {{ counterStore.datoStorage }}</p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { ejemploStore } from '@/stores/ejemplo'
const counterStore = ejemploStore()

function incrementCount() {
    counterStore.increment()
    contar.value = counterStore.count
    console.log('New Count:', counterStore.count)
}
const contar = ref(0);
</script>

<style scoped></style>