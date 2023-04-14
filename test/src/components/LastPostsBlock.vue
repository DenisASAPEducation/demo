<template>
    <section class="container">
        <h1>Last posts</h1>
        <div class="link-wrapper">
            <a class="disabled" href="#">All Posts</a>
        </div>
        <div class="posts-wrapper">
            <PostItem v-for="(item, index) in posts" :key="index" :item="item"/>
        </div>
    </section>
</template>

<script>
    import PostItem from '@/components/PostItem.vue';

    export default {
        name: 'LastPostsBlock',
        components: {
            PostItem,
        },
        data: () => {
            return {
                posts: [
                    {
                        img: '/images/post.png',
                        title: 'There are many reasons to get down',
                        text: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
                        date: '10	Oct 21'
                    },
                    {
                        img: '/images/post.png',
                        title: 'Choosing The Right Path',
                        text: 'Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.',
                        date: '18	Oct 20'
                    },
                    {
                        img: '/images/post.png',
                        title: 'Start your journey here',
                        text: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet. Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.',
                        date: '29	Oct 18'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 52px;
    }
    .link-wrapper {
        display: flex;
        justify-content: end;
        margin-bottom: 48px;
    }

    .posts-wrapper .post-item{
       margin-bottom: 50px; 
    }

    .posts-wrapper .post-item:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 980px) {
        .container {
            display: flex;
            flex-direction: column;
        }
        h1 {
            margin-bottom: 40px;
        }
        .link-wrapper {
            order: 3;
        }
        .posts-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .posts-wrapper .post-item, .posts-wrapper .post-item:last-child {
            margin-bottom: 40px;
        }
        .link-wrapper {
            justify-content: center;
        }
    }
</style>