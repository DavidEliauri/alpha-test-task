<script setup lang="ts">
    import NewsCard from '@/components/NewsCard.vue';
    import BaseButton from '@/components/Base/BaseButton.vue';
</script>

<template>
    <div class="news">
        <div class="news__items">
            <NewsCard v-for="n in 6" />
        </div>

        <div class="news__load-more">
            <BaseButton>Загрузить еще</BaseButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .news {
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

