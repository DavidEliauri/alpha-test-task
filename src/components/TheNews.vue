<script setup lang="ts">
    import NewsCard from '@/components/NewsCard.vue';
    import BaseButton from '@/components/Base/BaseButton.vue';
    import { onMounted, ref } from 'vue';
    import NewsApi from '@/api/NewsApi/NewsApi';
    import type { News } from '@/api/NewsApi/models/News';
    import BaseLoading from '@/components/Base/BaseLoading.vue';

    const news = ref<News[]>([]);

    const currentPage = ref<number>(1);

    const totalPages = ref<number | null>(null);

    const status = ref<'init' | 'initialPending' | 'pending' | 'success' | 'error'>('init');

    onMounted(async () => {
        status.value = 'initialPending';

        try {
            const response = await NewsApi.getNews(currentPage.value);

            news.value = response[0];
            totalPages.value = response[1];

            status.value = 'success';
        } catch (e) {
            console.error(e);

            status.value = 'error';
        }
    });

    async function getMoreNews() {
        status.value = 'pending';

        currentPage.value++;

        try {
            const response = await NewsApi.getNews(currentPage.value);

            news.value = [...news.value, ...response[0]];
            totalPages.value = response[1];

            status.value = 'success';
        } catch (e) {
            console.error(e);

            status.value = 'error';
        }
    }
</script>

<template>
    <div class="news">
        <template v-if="status === 'error'"> Что-то пошло не так! </template>

        <template v-else-if="status === 'init' || status === 'initialPending'">
            <div class="news__loading-container">
                <div class="news__loading">
                    <BaseLoading />
                </div>
            </div>
        </template>

        <template v-else>
            <div class="news__items">
                <NewsCard
                    v-for="n in news"
                    :key="n.code"
                    :news="n"
                />
            </div>

            <div
                v-if="currentPage < (totalPages ?? 0) || status === 'pending'"
                class="news__load-more"
            >
                <BaseButton
                    @click="getMoreNews"
                    :isPending="status === 'pending'"
                >
                    Загрузить еще
                </BaseButton>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
    .news {
        &__loading-container {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__loading {
            width: 42px;
            height: 42px;
        }

        &__items {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 64px;
            column-gap: 48px;
        }

        &__load-more {
            margin-top: 72px;
            display: flex;
            justify-content: center;
        }
    }
</style>

