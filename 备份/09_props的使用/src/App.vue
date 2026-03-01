<template>
  <Person :list="persons" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from '@/types'


// 定义一个响应式的 persons 数组，用于存储 PersonInter 接口的对象
// 初始化 persons 数组，包含 3 个 PersonInter 接口的对象
// 为美化代码将Persons写入reactive<>中
let persons = reactive<Persons>([
  { id: '1001', name: '张三', age: 18 },
  { id: '1002', name: '李四', age: 19 },
  { id: '1003', name: '王五', age: 20 }
])


</script>

<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>