<script setup lang="ts"></script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <img
                    src="@/assets/logo.svg"
                    class="header__logo-img"
                />
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        padding: 40px 0;
        box-shadow: 0px 8px 16px 0px #00000014;

        &__logo-img {
            display: block;
            width: 152px;
        }
    }
</style>

