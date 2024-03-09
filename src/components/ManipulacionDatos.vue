<template>
    <div>
        <h1>Expresiones Regulares</h1>
        <input v-model="inputText" placeholder="Ingresa un string..." />
        <p v-if="isValid" style="color: green;">¡Válido! El string cumple con la regla.</p>
        <p v-else style="color: red;">El string debe comenzar con mayúscula y tener letras minúsculas.</p>
    </div>
    <div>
        <h1>Date(); toLocalDateString()</h1>
        <input v-model.number="inputYear" type="number" @blur="validateYear" placeholder="Ingresa un año..." />
        <p v-if="isValidYear">Año válido. La fecha actual es {{ formattedDate }}</p>
        <p v-else style="color: red;">Por favor, ingresa un año válido (por ejemplo, 2023).</p>
    </div>
    <div>
        <h1>toLocalString()</h1>
        <p> el numero {{ numberToFormat }} formateado es: {{ formattedNumber }}</p>
    </div>
    <div>
        <h1>FileReader()</h1>
        <input type="file" @change="handleFileUpload" />
        <img v-if="thumbnail" :src="thumbnail" alt="Miniatura" style="width: 50px;" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
//Expresiones Regulares
const inputText = ref('');
const isValid = computed(
    () => /^[A-Z][a-z]*$/.test(inputText.value)
    );
//Date(); toLocalDateString()
const inputYear = ref<number | null>(null);
const isValidYear = ref<boolean>(false);
const formattedDate = ref('');
const validateYear = () => {
    if (inputYear.value !== null) {
        const currentYear = new Date();
        formattedDate.value = currentYear.toLocaleDateString("es-Ve", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        if (inputYear.value >= 0 && inputYear.value <= currentYear.getFullYear()) {
            isValidYear.value = true;
        } else {
            isValidYear.value = false;
        }
    }
};
//toLocaleString()
const numberToFormat = ref(9876.698);
const formattedNumber = ref('')
formattedNumber.value = numberToFormat.value.toLocaleString(
    'es-ES', {
        style: "currency", currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}); 

//FileReader
const thumbnail = ref<string | null>(null);
const handleFileUpload = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (file && (file.type.startsWith('image/jpeg') || file.type.startsWith('image/png'))) {
    const reader = new FileReader();
    reader.onload = () => {
      thumbnail.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    alert('Por favor, selecciona un archivo de imagen válido (formato JPEG o PNG).');
  }
};

</script>