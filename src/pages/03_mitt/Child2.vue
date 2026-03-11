<template>
  <div class="child2">
    <h3>弟弟组件</h3>
	<h4>书籍：{{ book }}</h4>
	<h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter';

// 数据
const book = ref('Vue3指南')
const toy = ref('')

// 给emitter绑定send-toy事件
emitter.on('send-toy', (value:any) => {
	toy.value = value
})

// 在组件卸载时解绑send-toy事件
onUnmounted(() => {
	emitter.off('send-toy')
})

</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>