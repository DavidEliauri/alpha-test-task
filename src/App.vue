<script setup lang="ts">
    import TheHeader from '@/components/TheHeader.vue';
    import TheHero from '@/components/TheHero.vue';
    import TheFooter from '@/components/TheFooter.vue';
    import TheNews from '@/components/TheNews.vue';
</script>

<template>
    <div class="page">
        <TheHeader />

        <main>
            <TheHero>Новости</TheHero>

            <div class="news">
                <div class="container"><TheNews /></div>
            </div>
        </main>

        <TheFooter />
    </div>
</template>

<style scoped lang="scss">
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 1 auto;
    }

    .news {
        margin-top: 64px;
        margin-bottom: 72px;
    }
</style>
