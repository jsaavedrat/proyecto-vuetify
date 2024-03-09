<template>
    <div>
        <h1> Arrays </h1>
        <div>

            <input v-model="searchQuery" placeholder="Filtrar por cualquier propiedad" />
            <br><button @click="sortByNameAsc">Ordenar por nombre (ascendente)</button>
            <br><button @click="sortByNameDesc">Ordenar por nombre (descendente)</button>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cédula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(person, index) in FilteredPeople" :key="index">
                        <td>{{ person.nombre }}</td>
                        <td>{{ person.apellido }}</td>
                        <td>{{ person.cedula }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <button @click="fetchCountries">Obtener países</button>
        <ul v-if="countries.length">
            <li v-for="country,index in countries" :key="index">
                {{ country.name.common }}
                {{ country.cca2 }}
                {{ country.cca3 }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
//Sort y Filter
const people = ref([
    { nombre: 'Juan', apellido: 'Pérez', cedula: '12345678' },
    { nombre: 'María', apellido: 'González', cedula: '98765432' },
    { nombre: 'Carlos', apellido: 'Rodríguez', cedula: '56789012' },
    { nombre: 'Ana', apellido: 'López', cedula: '34567890' },
    { nombre: 'Pedro', apellido: 'Martínez', cedula: '23456789' },
    { nombre: 'Laura', apellido: 'Fernández', cedula: '45678901' },
    { nombre: 'Diego', apellido: 'Hernández', cedula: '67890123' },
    { nombre: 'Isabel', apellido: 'Sánchez', cedula: '78901234' },
    { nombre: 'Andrés', apellido: 'Torres', cedula: '89012345' },
    { nombre: 'Sofía', apellido: 'Ramírez', cedula: '90123456' },
]);
const searchQuery = ref('');
const FilteredPeople = computed(() => {
    return people.value
        .filter(person => {
            const searchLower = searchQuery.value.toLowerCase();
            return (
                person.nombre.toLowerCase().includes(searchLower) ||
                person.apellido.toLowerCase().includes(searchLower) ||
                person.cedula.includes(searchQuery.value)
            );
        })
});

const sortByNameAsc = () => {
    people.value.sort((a, b) => a.nombre.localeCompare(b.nombre));
};

const sortByNameDesc = () => {
    people.value.sort((a, b) => b.nombre.localeCompare(a.nombre));
};

//Api Externa
import axios from 'axios';
const countries = ref<{
    name: {
        common: string;
    },
    cca2: string,
    cca3: string;
}[]>([]);
const fetchCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        countries.value = response.data;
    } catch (error) {
        console.error('Error al obtener los países:', error);
    }
};
</script>