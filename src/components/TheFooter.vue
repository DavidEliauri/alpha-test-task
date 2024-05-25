<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="container">
            <img
                src="@/assets/logo.svg"
                alt="Logo"
                class="footer__logo"
            />

            <div class="footer__copyright">© alpha, 2023</div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    .footer {
        background-color: #f0f6fe;
        padding: 64px 0;

        &__logo {
            display: block;
            width: 115px;
        }

        &__copyright {
            margin-top: 16px;
            color: #81899d;
        }
    }
</style>

