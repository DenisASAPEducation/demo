<template>
  <div class="about">
    <header>
      <h1>I'm header bleat</h1>

      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Catalog</router-link>
      </nav>
    </header>
    <router-view></router-view>
    <footer>I'm footer</footer>
  </div>
</template>
