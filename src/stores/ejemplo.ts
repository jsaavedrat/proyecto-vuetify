import { defineStore, acceptHMRUpdate } from 'pinia'

export const ejemploStore = defineStore({
    id: 'ejemplo',

    state: () => ({
        count: 0, 
        datoStorage : 0
    }),

    getters: {
        // Getter para el doble del contador
        doubleCount(state) {
            return state.count * 2
        },
    },
    
    actions: {
        increment() {
            this.count++
        },

        guardarResultadoEnLocalStorage() {
            const resultadoDoubleCount = this.doubleCount
            localStorage.setItem('resultadoDoubleCount', resultadoDoubleCount.toString())
        },

        resultadoGuardado() {
            const resultadoString = localStorage.getItem('resultadoDoubleCount')
            if (resultadoString !== null) {
                this.datoStorage = parseFloat(resultadoString)
            } else {
                this.datoStorage = 0
            }
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(ejemploStore, import.meta.hot))
}
