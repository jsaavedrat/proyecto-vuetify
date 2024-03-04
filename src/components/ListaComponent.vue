<template>
    <div class="pa-4 text-center">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="text-none font-weight-regular" prepend-icon="mdi-account" text="Edit Profile"
                    variant="tonal" v-bind="activatorProps"></v-btn>
            </template>

            <v-card prepend-icon="mdi-account" title="User Profile">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field v-model="newBook.title" label="Titulo del libro" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-checkbox v-model="newBook.copyright" label="copyright"></v-checkbox>

                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-text-field hint="example of persistent helper text" label="Last name*" persistent-hint
                                required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4" sm="6">
                            <v-text-field label="Confirm Password*" type="password" required></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-autocomplete
                                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                label="Interests" auto-select-first multiple></v-autocomplete>
                        </v-col>
                    </v-row>

                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

                    <v-btn color="primary" text="Save" variant="tonal" @click="savedata"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <v-data-table :sort-by="[{ key: 'id', order: 'asc' }]" :headers="tableHeaders" :items="booksData">

        <template v-slot:item.authors="{ item }">
            {{ formatAuthors(item.authors) }}
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const newBook = ref({
    id: 0,
    title: '',
    authors: [] as { name: string; birth_year: number; death_year: number }[],
    copyright: false
});
const dialog = ref(false);
const booksData = ref<{ id: number; title: string; authors: { name: string; birth_year: number; death_year: number }[]; copyright: boolean }[]>([]);
const formatAuthors = (authors: any[]) => {
    return authors.map((author) => {
        return `${author.name} (${author.birth_year}-${author.death_year})`;
    }).join('; ');
};
const tableHeaders = [
    { title: 'ID', value: 'id' },
    { title: 'Title', value: 'title', sortable: true },
    { title: 'Authors', value: 'authors' },
    { title: 'Copyright', value: 'copyright' },
];
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
function savedata() {
    console.log(newBook.value)
}
onMounted(() => {
    fetchData()
})
</script>

<style scoped></style>