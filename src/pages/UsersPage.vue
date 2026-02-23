<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('John Doe');
</script>


<template>
  <p>Hello, {{ name }}!</p>
</template>


<style scoped lang="scss">

p {
  text-align: center;
  color: aqua;
}
</style>
