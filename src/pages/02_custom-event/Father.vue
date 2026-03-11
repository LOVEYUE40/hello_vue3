<template>
  <div class="father">
    <h3>父组件</h3>
	<h4 v-show="toy">子给父的玩具：{{ toy }}</h4>
	<!-- 1.给子组件Child绑定事件 -->
    <Child @send-toy="saveToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
import { ref } from "vue";

const toy = ref('')

// 2.父组件接收事件方法
function saveToy(value:string){
	console.log('saveToy', value)
	toy.value = value
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>