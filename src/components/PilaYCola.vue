<template>
    <div>
        <h1>Pilas y Colas</h1>
        <input v-model="nuevoElemento" type="text" placeholder="Agregar Nuevo Elemento">
        <br><button @click="agregarElemento">Agregar a la Lista</button>
        <br><button @click="sacarElementoPila">Sacar de la pila</button>
        <br><button @click="sacarElementoCola">Sacar de la Cola</button>
        <ul>
            <li v-for="elemento in lista" :key="elemento.id">{{ elemento.valor }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const lista = ref<{ id: number; valor: string }[]>([]);
const nuevoElemento = ref<string>('');

const agregarElemento = () => {
    lista.value.push({ id: Date.now(), valor: nuevoElemento.value });
    nuevoElemento.value = ''
};



const sacarElementoPila = () => {
    lista.value.pop();
};

const sacarElementoCola = () => {
    lista.value.shift();
}; 
</script>