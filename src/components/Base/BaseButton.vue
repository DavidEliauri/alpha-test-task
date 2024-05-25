<script setup lang="ts">
    import BaseLoading from '@/components/Base/BaseLoading.vue';
</script>

<template>
    <!-- On load add .button_loading -->
    <button class="button">
        <span class="button__text">
            <slot />
        </span>

        <span class="button__loading">
            <BaseLoading />
        </span>
    </button>
</template>

<style scoped lang="scss">
    .button {
        border: 1px solid #002dbf;
        border-radius: 8px;
        font-size: 20px;
        font-weight: 600;
        background: none;
        color: #002dbf;
        fill: #002dbf;
        padding: 16px 32px;
        cursor: pointer;
        transition: all 100ms;
        position: relative;

        &:hover,
        &:focus {
            background-color: #002dbf;
            color: white;
            fill: white;
        }

        &__text {
            transition: opacity 500ms ease;
        }

        &__loading {
            display: block;
            width: 36px;
            height: 36px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 500ms ease;
            opacity: 0;
        }

        &_loading {
            .button__text {
                opacity: 0;
            }

            .button__loading {
                opacity: 1;
            }
        }
    }
</style>

