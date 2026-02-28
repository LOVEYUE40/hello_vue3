<template>
    <div class="person">
        ???
    </div>
</template>

<script setup lang="ts" name="Person">
// 引入 type 的 PersonInter 接口类型
// @是指进入文件的根目录
import { type PersonInter, type Persons } from '@/types'

// 定义一个 person 对象，符合 PersonInter 接口的类型
// let person:PersonInter = {id:'1001',name:'张三',age:18}

// 定义一个 personList 数组，符合 PersonInter 接口的类型
let personList: Persons = [
    { id: '1001', name: '张三', age: 18 },
    { id: '1002', name: '李四', age: 19 },
    { id: '1003', name: '王五', age: 20 }
]

</script>

<style scoped>
.person {
    background-color: skyblue;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
}
</style>
