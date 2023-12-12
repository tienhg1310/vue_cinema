<script setup>
import { ref, onMounted } from "vue"
import MovieCard from "../components/MovieCard.vue"

const moviesList = ref([])
const isLoading = ref(true)

onMounted(async () => {
    const results = await fetch("http://localhost:3000/movies")
    const response = await results.json()
    moviesList.value = response
    isLoading.value = false
})
</script>

<template>
    <h1 class="text-center font-bold text-5xl">Movies</h1>
    <div class="max-w-sm mx-auto text-center" v-if="isLoading">
        <span class="text-2xl font-bold text-indigo-700">Is loading....</span>
    </div>
    <div class="grid grid-cols-3 gap-4" v-else>
        <MovieCard v-for="movie in moviesList" :key="movie.id" :movie="movie" />
    </div>
</template>
