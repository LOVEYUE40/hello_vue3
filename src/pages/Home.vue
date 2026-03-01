
<template>
    <div class="home">
        <img src="https://p2.img.cctvpic.com/photoAlbum/page/performance/img/2025/12/10/1765331646512_556.png" alt="">

    </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 在组件挂载后执行路由跳转
// onMounted(() => {
//   setTimeout(() => {
//     // 在编写代码实现路由跳转，例如导航到另一个页面
//     router.push('/news');
//   }, 3000);
// });
</script>

<style scoped>
 .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
