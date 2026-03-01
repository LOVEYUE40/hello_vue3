<template>
    <div class="sum">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<!-- vue3生命周期写法 -->
<script setup lang="ts" name="Sum">
import { ref } from 'vue'

// 引入 Vue 提供的生命周期钩子函数
import {
    onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated,
    onBeforeUnmount, onUnmounted
} from 'vue';

// 定义一个响应式的 sum 变量，用于存储当前求和
let sum = ref(0)

// 定义一个 changeSum 函数，用于将 sum 变量的值加 1
function changeSum() {
    sum.value += 1
}

// 生命周期钩子
onBeforeMount(() => {
    console.log('挂载之前')
})

onMounted(() => {
    console.log('挂载完成')
})

onBeforeUpdate(() => {
    console.log('更新之前')
})

onUpdated(() => {
    console.log('更新完成')
})

onBeforeUnmount(() => {
    console.log('卸载之前')
})

onUnmounted(() => {
    console.log('卸载完成')
})

</script>

<style scoped>
.sum {
    background-color: #fff;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
