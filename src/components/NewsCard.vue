<script setup lang="ts"></script>

<template>
    <!-- When no image provided .news-card_no-img -->
    <div class="news-card">
        <img
            src="@/assets/news-card.png"
            class="news-card__img"
        />

        <div class="news-card__content">
            <div class="news-card__date">
                <div class="news-card__date-left">28</div>

                <div class="news-card__date-right">
                    <div>February</div>

                    <div>2022</div>
                </div>
            </div>

            <a
                href="#"
                class="news-card__title"
            >
                Alpha объединяет усилия с Миром
            </a>

            <div class="news-card__description">
                Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических
                услуг, чтобы помочь клиентам строить светлое будущее.
            </div>

            <div class="news-card__tags">
                <div class="news-card__tag">Новости</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .news-card {
        border-radius: 16px;
        overflow: hidden;

        &__img {
            display: block;
            object-fit: cover;
            width: 100%;
            height: 250px;
        }

        &__content {
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

