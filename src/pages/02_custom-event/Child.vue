<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>玩具：{{ toy }}</h4>
	<!-- 4.子组件触发事件，给父组件发送数据 -->
	<button @click="emit('send-toy',toy)">子给父发送玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref, onMounted } from "vue";
// 数据
const toy = ref('奥特曼')

// 3.子组件声明事件
const emit = defineEmits(['send-toy'])

</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>