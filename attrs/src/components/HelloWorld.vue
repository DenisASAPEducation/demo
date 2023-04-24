<template>
  <div class="hello">
    <p :class="[{'red': getset, 'bold': isBold}, size]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <template v-if="buttonsIsVisible">
      <button @click="getset = !getset">Change text color</button>
      <button @click="isBold = !isBold">Change font weight</button>
    </template>
    
    <button @click="isBig = !isBig">Change size</button>

    <button @click="buttonsIsVisible = !buttonsIsVisible">Toggle buttons</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // size: 'size',
      isRed: false,
      isBold: false,
      isBig: false,
      buttonsIsVisible: true
    }
  },
  computed: {
    // classes() {
    //   return [{'red': this.isRed, 'bold': this.isBold}, this.size]
    // },
    size() {
      return {'size': this.isBig}
    },
    getset: {
      get() {
        return this.isRed
      },
      set(v) {
        this.isRed = v
      }
    }
  },
}
</script>

<style>
  .size {
    font-size: 40px;
  }
  .red {
    color: red
  }
  .bold {
    font-weight: bold;
  }
</style>