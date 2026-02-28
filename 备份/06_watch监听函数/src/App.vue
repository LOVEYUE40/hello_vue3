<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Sum />
    <Person />
    <PersonTwo />
    <Car />
    <AllNum />
  </div>
</template>

<script lang="ts">
// 引入AllNum组件
import AllNum from './components/AllNum.vue'
// 引入Car组件
import Car from './components/Car.vue'  
// 引入PersonTwo组件
import PersonTwo from './components/PersonTwo.vue'
// 引入Sum组件
import Sum from './components/Sum.vue'
// 引入Person组件
import Person from './components/Person.vue'
export default {
  name: 'App',  //组件名
  components: {
    Sum, //注册组件
    Person, //注册组件
    PersonTwo, //注册组件
    Car, //注册组件 
    AllNum //注册组件
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