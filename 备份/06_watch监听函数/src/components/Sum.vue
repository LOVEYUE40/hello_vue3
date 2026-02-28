
<template>
    <div class="sum">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Sum">
import { ref, watch } from 'vue'
// 定义响应式数据sum
let sum = ref(0)
// 定义方法changeSum，用于修改sum的值   
function changeSum() {
    sum.value += 1
}
// 情况一：监视【ref】定义的【基本类型】数据
const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log('sum变化了', newVal, oldVal);
    if (newVal >= 10) {
        stopWatch()
    }
})



</script>

<style scoped>  .sum {
      background-color: pink;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
  }
</style>
