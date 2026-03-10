<template>
    <div class="count">
        <h2>当前和为：{{ countStore.sum }}</h2>
        <!-- 表单输入修饰符用法：v-model.number,将用户输入的值自动转换为数字类型 -->
        <h3>欢迎来到{{ countStore.location }}，坐落于{{ countStore.address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">增加</button>
        <button @click="minus">减少</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/count'

const countStore = useCountStore()   // 使用pinia中的count数据

// 数据
const n = ref(1)   // 用户选择的数字

//方法
function add() {
    // pinia的第一种修改数据方式
    // countStore.sum += 1
    // countStore.location = '中国'
    // countStore.address = '中国北京'

    // pinia的第二种修改数据方式：$patch()批量变更
    // countStore.$patch({
    //     sum: 88,
    //     location: '美国公司',
    //     address:'美国纽约'
    // })

    // pinia的第三种修改方式：调用actions中的方法
    countStore.increment(n.value)
}

function minus() {
    countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>