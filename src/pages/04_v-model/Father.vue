<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>用户名：{{ username }}</h4>
    <h4>密码：{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-mode="username"> -->
    <!-- v-model的底层是实现原理 -->
    <!-- $event.target会标红原因是有可能为null，只要使用<HTMLInputElement>断言就不会报错了 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    
    <!-- <TestInput/>在这里是组件 -->
    <!-- <TestInput v-model="username"/> -->
    <!-- 自定义组件中v-model的实现原理
    :modelValue="username"数据传向页面组件
    @update:modelValue="username = $event"组件传回数据给页面组件
    <TestInput :modelValue="username" @update:modelValue="username = $event"/> -->

    <!-- 修改modelValue -->
    <TestInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from "vue";
import TestInput from './TestInput.vue'
 
  // 数据
  let username = ref('zhansgan')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
