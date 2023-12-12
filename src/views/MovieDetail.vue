<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const queryMovie = ref({})
const isLoading = ref(true)
const router = useRouter()
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
})
onMounted(async () => {
    const results = await fetch(`http://localhost:3000/movies/${props.id}`)
    if (results.status !== 200) {
        router.push({ name: "NotFound" })
    }
    const response = await results.json()
    queryMovie.value = response
    isLoading.value = false
})
</script>

<template>
    <section class="bg-white dark:bg-gray-900 m-6 p-4">
        <div class="container" v-if="isLoading">Is loading</div>
        <div
            v-else
            class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row"
        >
            <div class="flex justify-center xl:w-1/2">
                <img
                    class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
                    :src="queryMovie.Poster"
                    :alt="queryMovie.Title"
                />
            </div>
            <div
                class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0"
            >
                <h2
                    class="text-3xl font-bold tracking-tight ☐text-gray-800 xl:text-4xl dark:text-white"
                >
                    {{ queryMovie.Title }}
                </h2>
                <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
                    {{ queryMovie.Year }}
                </span>
                <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
                    {{ queryMovie.Runtime }}
                </span>
                <div class="mt-6 sm:-mx-2">
                    <div
                        class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
                    >
                        <a
                            href="#"
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center"
                        >
                            <span class="mx-2">watch online</span>
                        </a>
                    </div>
                    <div
                        class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
                    >
                        <a
                            href="#"
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-center"
                        >
                            <span class="mx-2">download</span>
                        </a>
                    </div>
                </div>
                <div class="mt-6 sm:-mx-2">
                    <div
                        class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2"
                    >
                        <button
                            @click="$router.go(-1)"
                            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            <span class="mx-2">Go back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
