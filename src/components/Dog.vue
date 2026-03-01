<template>
    <div class="dog">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="increment">点我sum+1</button>
        <button @click="decrement">点我sum-1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :key="index" :src="(dog as string)">
        <button @click="addDog">添加狗</button>
    </div>
</template>


<script setup lang="ts" name="Dog">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

let { sum, increment, decrement } = useSum()
let { dogList, addDog } = useDog()


</script>

<style scoped>
.dog {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    font-size: 20px;
}

img {
    height: 100px;
    margin-right: 10px;
}
</style>
