<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>书籍：{{ book }}</h4>
		<!-- v-show判断是否为真，真就显示，假就隐藏 -->
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 父组件传递数据给子组件 -->
		<Child :book="book" :sendToy="getToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'

// 数据
const book = ref('格林童话')
const toy = ref('') // 初始值为空字符

// 接收子组件传递数据的方法
function getToy(value: string) {
	console.log('父组件接收子组件传递的数据：', value);
	// 将接收到的数据赋值给toy，这样父组件就可以显示了
	toy.value = value

}


</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}
</style>