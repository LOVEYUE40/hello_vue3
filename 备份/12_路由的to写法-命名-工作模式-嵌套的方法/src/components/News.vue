<template>
    <div class="news">
        <!--导航区-->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <RouterLink :to="{path:'/news/detail'}">{{ news.title }}</RouterLink>
            </li>
        </ul>
        <!--展示区-->
        <div class="news-content">
            <RouterView></RouterView>
        </div>

    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router';

const newsList = reactive([
    { id: '1', title: '新闻1', content: '中央新闻频道正式上线！' },
    { id: '2', title: '新闻2', content: '中央新闻频道将提供24小时不间断的新闻报道。' },
    { id:'3',title: '新闻3', content: '中央新闻频道将覆盖全球重大事件和热点话题。' },
    { id:'4', title: '新闻4', content: '中央新闻频道将为用户提供实时新闻更新。' }
])

</script>

<style scoped>
/* 新闻 */
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li::marker{
    color: #64967E;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>
