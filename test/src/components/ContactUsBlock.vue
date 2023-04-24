<template>
    <section class="container">
        <h1>Contact us</h1>
        <p class="neutral-4-color">
            Life is 10% what happens to you and 90% how you react to it. It does not matter how slowly you go as long as you do not stop. Confucius.
        </p>
        <form @submit.prevent.stop="Submit">
            <div class="inputs">
                <input placeholder="Your name" v-model.lazy="name" :class="{'border-error': !nameIsValid}"/>
                <input placeholder="Email" v-model.lazy="email" type="email" :class="{'border-error': !eamailIsValid}"/>
            </div>
            <textarea placeholder="Description (optional)" v-model.lazy="description"/>
            <button @click.prevent.stop="Submit">Send</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'ContactusBlock',
        data: () => {
            return {
                name: '',
                email: '',
                description: '',

                nameIsValid: true,
                eamailIsValid: true,

                censorship: ['Lorem']
            }
        },
        watch: {
            name: function (value) {
                const re=/[^a-zA-Zа-яА-Я ]/ui
                this.nameIsValid = !re.test(value)
            },
            email: function (value) {
                this.eamailIsValid = (new RegExp("^((([0-9A-Za-z]{1}[-0-9A-z\\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\\.){1,}[-A-Za-z]{2,})$").test(value))
            },
            description: function(value) {
                for(const item of this.censorship) {
                    this.description = value.replaceAll(item, '*')
                }
            }
        },
        methods: {
            Submit() {
                console.log('Submit')
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }
    p {
        text-align: center;
        max-width: 620px;
        margin: 0 auto 40px;
    }

    form {
        width: 460px;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputs {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        width: 100%;
    }
    input {
        width: calc(50% - 10px);
    }
    textarea {
        width: 100%;
        height: 122px;
        margin-bottom: 30px;
    }
    button {
        width: 160px;
        height: 46px;
        text-transform: uppercase;
        color: #ffffff;
        background: #6E38F7;
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 980px) {
        .inputs {
            flex-direction: column;
        }
        input {
            width: 100%;
        }
        input:first-child {
            margin-bottom: 20px;
        }
    }
</style>