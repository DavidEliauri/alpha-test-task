<script setup lang="ts"></script>

<template>
    <div class="hero">
        <div class="hero__container">
            <div class="container">
                <h1 class="hero__title">
                    <slot />
                </h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .hero {
        height: 320px;
        background-image: url('@/assets/hero-background.jpg');
        background-size: cover;
        display: flex;
        align-items: flex-end;

        &__container {
            padding: 48px 0;
        }

        &__title {
            font-weight: 700;
            font-size: 40px;
        }
    }
</style>

