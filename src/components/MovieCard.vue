<script setup>
defineProps({
    movie: Object,
})
</script>
<template>
    <RouterLink :to="{ name: 'MovieDetail', params: { id: movie.id } }">
        <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="flex justify-center p-5">
                <img
                    class="h-96 w-80 flex-shrink-0 object-cover rounded-t-lg"
                    :src="movie.Poster"
                    :alt="movie.Title"
                />
            </div>
            <div class="p-5">
                <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    {{ movie.Title }}
                </h5>
                <span class="mr-4">{{ movie.Year }}</span>
                <span>{{ movie.Runtime }}</span>
            </div>
        </div>
    </RouterLink>
</template>
