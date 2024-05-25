<script setup lang="ts">
    import NewsCard from '@/components/NewsCard.vue';
</script>

<template>
    <div class="news">
        <NewsCard v-for="n in 6" />
    </div>
</template>

<style scoped lang="scss">
    .news {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        row-gap: 64px;
        column-gap: 48px;
    }
</style>

