<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>父给的书：{{ book }}</h4>
		<!-- 注意：sendtoy要返回参数 -->
		<button @click="sendToy(toy)">把玩具给父</button>
	</div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

// 数据
const toy = ref('玩具车')

// 声明接收父组件的props
// 接收父组件传递的book和sendToy方法，sendToy方法是用来把数据传递给父组件的
defineProps(['book', 'sendToy'])

</script>

<style scoped>
.child {
	background-color: skyblue;
	padding: 10px;
	box-shadow: 0 0 10px black;
	border-radius: 10px;
}
</style>
