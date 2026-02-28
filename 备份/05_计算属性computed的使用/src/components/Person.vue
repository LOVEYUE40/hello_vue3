
import { GeneratedIdentifierFlags } from 'typescript';
<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名：<span>{{ fullName }}</span><br>
        <button @click="changeFullName">修改全名为: li-sa</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue'

let firstName = ref('John')
let lastName = ref('Doe')

// 计算属性默认只读，不能修改 
// let fullName = computed(() => {
//     return firstName.value + '-' + lastName.value
// })

// 计算属性可以修改，但是不推荐
// 因为计算属性的主要作用是根据响应式数据计算出一个新值，而不是直接修改响应式数据
// 所以不推荐在计算属性中直接修改响应式数据
let fullName = computed({
    // 计算属性的getter方法
    get() {
        return firstName.value + '-' + lastName.value
    },
    // 计算属性的setter方法
    set(val) {

        [firstName.value, lastName.value] = val.split('-')

    }

})

// 推荐在方法中修改响应式数据
// 例如：changeFullName方法中修改firstName和lastName
// 而不是在计算属性中直接修改firstName和lastName
function changeFullName() {
    fullName.value = 'li-sa'
}



</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
