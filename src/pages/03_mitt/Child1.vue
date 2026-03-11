<template>
  <div class="child1">
    <h3>哥哥组件</h3>
	<h4>玩具：{{ toy }}</h4>
	<button @click="emitter.emit('send-toy',toy)">给弟弟玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
import emitter from '@/utils/emitter';
import {ref} from 'vue'

// 数据
const toy = ref('变形金刚');
	
</script>

<style scoped>
	.child1{
		margin-top: 50px;
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
	.child1 button{
		margin-right: 10px;
	}
</style>