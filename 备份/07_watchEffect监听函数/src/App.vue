<template>
  <div class="app">
    <h1>水温检测器</h1>
    <Water />
  </div>
</template>

<script lang="ts">
// 引入Water组件
import Water from './components/Water.vue'
export default {
  name: 'App',  //组件名
  components: { 
    Water //注册组件
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