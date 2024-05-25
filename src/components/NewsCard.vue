<script setup lang="ts">
    import type { News } from '@/api/NewsApi/models/News';
    import getFullMonth from '@/utlis/getFullMonth';

    defineProps<{
        news: News;
    }>();
</script>

<template>
    <div
        :class="{
            'news-card_no-img': !news.image,
        }"
        class="news-card"
    >
        <img
            v-if="news.image"
            :src="news.image"
            class="news-card__img"
        />

        <div class="news-card__content">
            <div class="news-card__date">
                <div class="news-card__date-left">{{ news.date.getDate() }}</div>

                <div class="news-card__date-right">
                    <div>{{ getFullMonth(news.date.getMonth()) }}</div>

                    <div>{{ news.date.getFullYear() }}</div>
                </div>
            </div>

            <a
                href="#"
                class="news-card__title"
            >
                {{ news.name }}
            </a>

            <div class="news-card__description">
                {{ news.previewText }}
            </div>

            <div class="news-card__tags">
                <div class="news-card__tag">{{ news.type.value }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .news-card {
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        &__img {
            flex: none;
            display: block;
            object-fit: cover;
            width: 100%;
            height: 250px;
        }

        &__content {
            flex: 1 1 auto;
            border: 1px solid #0f62fe;
            border-top: none;
            padding: 32px;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
        }

        &__date {
            display: flex;
            color: #a1a7b5;
        }

        &__date-left {
            font-size: 36px;
            line-height: 36px;
            margin-right: 4px;
        }

        &__date-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 15px;
            font-weight: 700;
        }

        &__title {
            display: block;
            margin-top: 16px;
            color: #0c5bef;
            font-size: 22px;
            text-decoration: none;

            &:hover {
                color: #0029a9;
            }
        }

        &__description {
            margin-top: 16px;
            font-size: 20px;
        }

        &__tags {
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        &__tag {
            background-color: #f0f6fe;
            border-radius: 9999px;
            font-size: 14px;
            padding: 4px 16px;
        }

        &_no-img {
            .news-card__content {
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                border-top: 1px solid #0f62fe;
            }
        }
    }
</style>

