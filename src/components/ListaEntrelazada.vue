<template>
    <div>
      <h1>Lista Enlazada</h1>
      <input v-model="nombre" placeholder="Nombre del paciente" /><br>
      Cedula: <input v-model.number="cedula" placeholder="Hora de la cita" />
      <button @click="agregarNodo">Agregar Nodo</button>
      <ul>
          <button @click="display()">Desplegar</button>
        <li v-for="(nodo, index) in lista" :key="index">
          {{ nodo }}
          <button @click="eliminarNodo(index)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const lista = ref<string[]>([]);
  class Nodo {
    nombrePaciente: string;
    cedula: number;
    siguiente: Nodo | null;
  
    constructor(nombre: string, cedula: number) {
      this.nombrePaciente = nombre;
      this.cedula = cedula;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    cabeza: Nodo | null;
  
    constructor() {
      this.cabeza = null;
    }
  
    agregarNodo(nombre: string, cedula: number): void {
      const nuevoNodo = new Nodo(nombre, cedula);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
        while (actual.siguiente) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
    }
  
    display() {
      lista.value = []
      let current = this.cabeza;
      while (current) {
        console.log(current.nombrePaciente);
        lista.value.push(current.nombrePaciente)
        current = current.siguiente;
      }
    }
  
    eliminarNodo(index: number): void {
      if (!this.cabeza) return;
      if (index === 0) {
        this.cabeza = this.cabeza.siguiente;
        return;
      }
      let actual = this.cabeza;
      let previo = null;
      let contador = 0;
      while (actual && contador < index) {
        previo = actual;
        actual = actual.siguiente;
        contador++;
      }
      if (actual) {
        previo!.siguiente = actual.siguiente;
      }
    }
  }
  
  const listaEnlazada = new ListaEnlazada();
  const nombre = ref('');
  const cedula = ref(0);
  
  const agregarNodo = () => {
    listaEnlazada.agregarNodo(nombre.value, cedula.value);
    nombre.value = '';
    cedula.value = 0;
  };
  
  const eliminarNodo = (index: number) => {
    listaEnlazada.eliminarNodo(index);
    listaEnlazada.display();
  };
  const display = () => {
    listaEnlazada.display();
  };
  </script>
  