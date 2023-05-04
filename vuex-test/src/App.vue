<template>
  <div id="app">
    <div class="container">
      <div>
        <input :value="firstNameA" @input="changeFirstName($event.target.value)"/>
        <input :value="lastNameA" @input="changeLastName($event.target.value)"/>
        <p>Full Name: {{ fullNameA }}</p>
      </div>
      <div>
        <input v-model="firstNameB"/>
        <input v-model="lastNameB"/>
        <p>Full Name: {{ fullNameB }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex';

import {mapState,mapGetters,mapMutations} from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('module_a',{
      firstNameA: 'firstName',
      lastNameA: 'lastName'
    }),
    ...mapGetters('module_a',{
      fullNameA: 'fullName'
    }),
    firstNameB: {
      get() {
        return this.$store.getters.firstName
      },
      set(v) {
        // this.$store.commit('changeFirstName', v)
        this.$store.dispatch('changeFirstName',v)
      }
    },
    lastNameB: {
      get() {
        return this.$store.getters.lastName
      },
      set(v) {
        this.$store.commit('changeLastName', v)
      }
    },
    fullNameB() {
      return this.$store.getters.fullName
    }
  },
  methods: {
    ...mapMutations('module_a',['changeFirstName', 'changeLastName'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
