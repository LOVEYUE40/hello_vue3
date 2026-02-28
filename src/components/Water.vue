<template>
    <div class="water">
        <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
        <h2 id="demo">水温：{{ temp }}</h2>
        <h2>水位：{{ height }}</h2>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+5</button>
    </div>
</template>

<script setup lang="ts" name="Water">
import { ref, watch, watchEffect } from 'vue'
// 数据
let temp = ref(10)
let height = ref(5)

// 方法
function changeTemp() {
    temp.value += 10
}
function changeHeight() {
    height.value += 5
}

// 用watch实现，需要明确的指出要监视：temp、height
watch([temp, height], (value) => {
    // 从value中获取最新的temp值、height值
    const [newTemp, newHeight] = value
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if (newTemp >= 50 || newHeight >= 20) {
        console.log('联系服务器')
    }
})

// 用watchEffect实现监视：temp、height
const stopWatch = watchEffect(() => {
    // 室温达到50℃，或水位达到20cm，立刻联系服务器
    if (temp.value >= 50 || height.value >= 20) {
        console.log('联系服务器')
    }

    // 水温达到100，或水位达到50，取消监视
    if (temp.value >= 100 || height.value >= 50) {
        console.log('取消监视')
        stopWatch()
    }
})


</script>

<style scoped>
.water {
    background-color: skyblue;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
}
</style>
