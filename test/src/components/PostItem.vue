<template>
    <div class="post-item">
        <img class="post-item__img" :src="item.img"/>
        <div class="post-item__contain">
            <div class="post-item__text">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
            </div>
            <div class="post-item__actions">
                <p class="neutral-4-color">{{ item.date }}</p>
                <a class="disabled" href="#">Read More</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostItem',
        props: {
            item: Object
        }
    }
</script>

<style scoped>
    .post-item {
        display: flex;
        align-items: flex-start;
        height: 270px;
    }
    .post-item__img {
        flex: 1 1 50%;
        padding-right: 20px;
        height: 100%;
        object-fit: cover;
    }
    .post-item__contain {
        flex: 1 1 50%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h4 {
        margin-bottom: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p {
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
    .post-item__text {
        margin-bottom: 20px;
        overflow: hidden;
    }
    .post-item__actions {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 980px) {
        .post-item {
            width: 214px;
            height: auto;
            flex-direction: column;
        }

        .post-item__img, .post-item__contain {
            width: 100%;
            flex: none;
        }
        .post-item__img {
            padding: 0;
            margin-bottom: 17px;
        }
        h4 {
            margin-bottom: 16px;
            white-space: normal;
        }
        .post-item__text {
            margin-bottom: 25px;
        }
    }
</style>