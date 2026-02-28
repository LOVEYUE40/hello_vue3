<template>
    <div class="car">
        <h2>汽车信息：一台{{ car.brand }}汽车，价值 {{ car.price }}万</h2>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>

        <h2>测试嵌套：{{ obj.a.b.c.d }}</h2>

        <button @click="changeCarPrice">修改汽车价值</button>
        <button @click="changeFirstGame">修改第一个游戏名</button>
        <button @click="changeTest">测试嵌套</button>
    </div>
</template>

<script lang="ts" setup name="Car">
import { ref } from 'vue'


// ref创建：对象类型的响应式数据
let car = ref({ brand: '奔驰', price: 100 })

let games = ref([
    { id: 'numf01', name: '游戏1' },
    { id: 'numf02', name: '游戏2' },
    { id: 'numf03', name: '游戏3' }
])

let obj = ref({
    a: {
        b: {
            c: {
                d: 'hello vue3'
            }
        }
    }
})

function changeCarPrice() {
    car.value.price += 10
    console.log(car.value.price);
}
function changeFirstGame() {
    games.value[0].name = '新游戏01';
}
function changeTest() {
    obj.value.a.b.c.d = '999'
}


</script>

<style scoped>
.car {
    background-color: pink;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
