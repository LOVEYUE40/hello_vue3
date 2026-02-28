<template>
    <div class="persontwo">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ persontwo.name }}</h2>
        <h2>年龄：{{ persontwo.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePersonTwo">修改整个人</button>
        <hr>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>
    </div>
</template>

<script setup lang="ts" name="PersonTwo">
import { reactive, watch } from 'vue'

// 定义[对象类型]的响应式数据
let persontwo = reactive({
    name: 'Mark',
    age: 18
})

// 测试嵌套对象内的属性可否监听
let obj = reactive({
    a: {
        b: {
            c: 666
        }
    }
})

// 方法
function changeName() {
    persontwo.name = 'Jone'
}
function changeAge() {
    persontwo.age += 1
}
// 方法：修改整个人,但是不推荐，地址没改变，
// 而是把属性值硬填充进persontwo这个对象类型的响应式数据
function changePersonTwo() {
    Object.assign(persontwo, { name: 'Rose', age: 30 })
}
function test() {
    obj.a.b.c = 888
}

// 情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
watch(persontwo, (newVal, oldVal) => {
    console.log('persontwo被修改了', newVal, oldVal)
})
watch(obj, (newVal, oldVal) => {
    console.log('obj被修改了', newVal, oldVal)
})

</script>

<style scoped>  .persontwo {
      background-color: rgb(117, 16, 206);
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
  }
</style>