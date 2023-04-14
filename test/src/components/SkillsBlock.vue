<template>
    <section class="container">
        <h1>Skills</h1>
        <div class="skills-wrapper">
            <div 
                :class="['skills-item', {'skills-item_active': index === activeIndex}]"
                v-for="(item, index) in skillsList"
                :key="index"
            >
                <div class="skills-item__header">
                    <h6>{{ item.header }}</h6>

                    <button @click="toggleAccordion(index)"><img :src="`/images/${index === activeIndex ? 'minus' : 'plus'}.png`"/></button>
                </div>
                <p v-show="index === activeIndex" class="skills-item__text">{{ item.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SkillsBlock',
        data: () => {
            return {
                activeIndex: null,
                skillsList: [
                    {
                        header: 'Html',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    },
                    {
                        header: 'CSS',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    },
                    {
                        header: 'JavaScript',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    },
                    {
                        header: 'Vue',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    }
                ]
            }
        },
        methods: {
            toggleAccordion(index) {
                if ( this.activeIndex === index) {
                    this.activeIndex = null
                } else {
                    this.activeIndex = index
                }
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 40px;
    }

    .skills-item {
        padding: 18px 19px;
        border: 1px solid #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .skills-item:last-child {
        margin-bottom: 0;
    }
    .skills-item_active {
        border-color: #6E38F7;
    }

    .skills-item__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .skills-item__text {
        margin-top: 20px;
    }
</style>