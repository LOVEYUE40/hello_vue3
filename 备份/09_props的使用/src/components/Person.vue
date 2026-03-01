<template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{ item.name }}---{{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">
// 定义一个 props 对象，用于接收父组件传递的 list 属性
import { defineProps } from 'vue'
import { type Persons } from '@/types'
import { withDefaults } from 'vue';

// 第一种写法：仅接受,不建议使用
// const props = defineProps(['list'])

// 第二种写法：接受list 属性 + 限制类型
// defineProps<{list: Persons}>()

// 第三种写法：接受list 属性 + 限制类型 + 默认值 + 限制必要性
// 定义一个 props 对象，用于接收父组件传递的 list 属性
// 限制必要性：list 属性是必要的，不能为 undefined
// 限制默认值：如果父组件没有传递 list 属性，默认值为一个包含 1 个 PersonInter 接口对象的数组
// list: () => [{ id: '1001', name: '张三', age: 18 }]
let props = withDefaults(defineProps<{ list?: Persons }>(), {
    list: () => [{ id: '1001', name: '张三', age: 18 }]
})
console.log(props)
</script>

<style scoped>
.person {
    background-color: skyblue;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
}
</style>
