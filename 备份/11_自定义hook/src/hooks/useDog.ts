import { reactive, onMounted } from 'vue'
import axios, { AxiosError } from 'axios'

export default function useDog() {
    // 数据
    let dogList = reactive<string[]>([])

    // 方法
    async function addDog() {
        try {
            // 发请求
            let { data } = await axios.get(
                'https://dog.ceo/api/breed/pembroke/images/random'
            )
            // 维护数据
            dogList.push(data.message)
        } catch (error) {
            // 处理错误
            const err = <AxiosError>error
            console.log(err.message)
        }

    }

    // 挂载钩子
    onMounted(() => {
        addDog()
    })

    //向外部暴露数据
    return {
        dogList,
        addDog
    }
}