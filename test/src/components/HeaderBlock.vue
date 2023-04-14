<template>
    <header class="container">
        <img src="/images/logo.png"/>

        <div class="burger-menu" :class="{'opened': menuIsShow}" @click="toggleMenu">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>

        <nav :class="{'active': menuIsShow}">
            <a
                v-for="(item, index) in links"
                :key="index"
                :href="item.url" 
                @click.prevent.stop="goToSection(item.url)"
                :class="{'disabled': item.disabled}"
            >
                {{ item.label }}
            </a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderBlock',
        data: () => {
            return {
                links: [
                    {
                        label: 'About',
                        url: '#about'
                    },
                    {
                        label: 'Skills',
                        url: '#skills'
                    },
                    {
                        label: 'Social',
                        url: '#social'
                    },
                    {
                        label: 'Coutacts Us',
                        url: '#contacts'
                    },
                    {
                        label: 'Blog',
                        url: 'blog',
                        disabled: true
                    }
                ],
                menuIsShow: false,
            }
        },
        methods: {
            goToSection(url) {
                this.menuIsShow = false;

                const element = document.querySelector(url)
                if (!element) return

                const top = element.offsetTop;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            },
            toggleMenu() {
                this.menuIsShow = !this.menuIsShow
            }
        }
    }
</script>

<style scoped>
    header {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .burger-menu {
        display: none;
    }
    a {
        margin-right: 15px;
    }
    a:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 980px) {

        .burger-menu {
            display: block;
            height: 12px;
            width: 16px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .burger-menu .line {
            width: 100%;
            height: 2px;
            border-radius: 1px;
            background: #5C33B9;
        }
        .burger-menu .line1 {
            transform-origin: 0% 0%;
            transition: transform 0.4s ease-in-out;
        }

        .burger-menu .line2 {
            transition: transform 0.2s ease-in-out;
        }

        .burger-menu .line3 {
            transform-origin: 0% 100%;
            transition: transform 0.4s ease-in-out;
        }
        .burger-menu.opened .line1 {
            transform: rotate(45deg);
        }
        .burger-menu.opened .line2 {
            transform: scaleY(0);
        }
        .burger-menu.opened .line3 {
            transform: rotate(-45deg);
        }

        header {
            background: #ffffff;
        }
        nav {
            display: none;
        }
        nav.active {
            display: flex;
            flex-direction: column;
            position: fixed;
            background: #ffffff;
            top: 76px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            padding: 15px;
            align-items: center;
        }
        a {
            margin-bottom: 20px;
        }
    }
</style>