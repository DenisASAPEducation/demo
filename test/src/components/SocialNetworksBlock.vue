<template>
    <section>
        <h1>My social networks</h1>
        <p class="neutral-4-color">There are many reasons to get down and start to get depressed about your situation.</p>
        <SliderWrapper/>
    </section>
</template>

<script>
    import SliderWrapper from '@/components/SliderWrapper.vue';

    export default {
        name: 'SocialNetworksBlock',
        components: {
            SliderWrapper
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 40px;
        text-align: center;
    }
</style>