<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'
// 定义响应式数据person
let person = ref({
    name: 'Jone',
    age: 20
})

// 定义方法changeName，用于修改person的name属性
function changeName() {
    person.value.name = 'Rose'
}

// 定义方法changeAge，用于修改person的age属性
function changeAge() {
    person.value.age = 25
}
// 定义方法changePerson，用于修改person的所有属性
function changePerson() {
    person.value = {
        name: 'Lisa',
        age: 30
    }
}

// 情况二：监视【ref】定义的【对象类型】数据
// 监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
// watch的第一个参数是：被监视的数据
// watch的第二个参数是：监视的回调
// watch的第三个参数是：配置对象（deep、immediate等等.....）
watch(person, (newVal, oldVal) => {
    console.log('person被修改了', newVal, oldVal)

}, { deep: true })

</script>

<style scoped>  .person {
      background-color: rgb(25, 179, 222);
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
  }
</style>