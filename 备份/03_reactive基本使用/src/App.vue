<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Car />
  </div>
</template>

<script lang="ts">
// 引入Car组件
import Car from './components/Car.vue'
export default {
  name: 'App',  //组件名
  components: {
    Car //注册组件

  }
}
</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>