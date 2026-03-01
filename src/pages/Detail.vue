<template>
    <div class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </div>

</template>

<script setup lang="ts" name="Detail">
// 使用路由的props传递过来的参数
defineProps(['id', 'title', 'content'])

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
