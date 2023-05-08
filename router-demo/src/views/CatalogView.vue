<template>
    <div>
        <div>CATALOG!!!!!</div>
        <router-link :to="{name: 'product', params: {id: 313}}">Product!</router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'CatalogView'
    }
</script>