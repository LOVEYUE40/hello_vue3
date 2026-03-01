<template>
    <div class="news-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </div>

</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue';

// 接收 query参数
import { useRoute } from 'vue-router'
const route = useRoute()

// 解构上面route.query.id中的query对象，然后变为query.id等等
// toRefs使解构后的query对象仍然具有响应式特性
let { query } = toRefs(route)

// 打印query对象，查看是否成功接收参数
console.log(route.query);

</script>

<style scoped>
/* 新闻详情 */
.news-list {
    list-style: none;
    padding-left: 20px;
}

.news-list>li {
    line-height: 30px; 
}
</style>
