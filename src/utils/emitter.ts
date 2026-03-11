// 引入mitt
import mitt from 'mitt';

// 调用mitt得到emitter，emitter能：绑定事件，触发事件
const emitter = mitt()

// // 绑定事件 .on(事件名，回调函数)
// emitter.on('test1',()=>{
// 	console.log('test1事件被绑定了')
// })
// emitter.on('test2',()=>{
// 	console.log('test2事件被绑定了')
// })

// // 触发事件 .emit(事件名)，触发事件会调用绑定的回调函数
// setInterval(()=>{
// 	emitter.emit('test1') // 触发test1事件
// 	emitter.emit('test2')
// }, 1000) // 每隔1秒触发一次test1和test2事件

// // 解绑事件 .off(事件名，回调函数)
// setTimeout(()=>{
// 	emitter.off('test1') // 解绑test1事件
// 	emitter.off('test2') // 解绑test2事件

// 	emitter.all.clear() // 解绑所有事件
// }, 3000) // 3秒后解绑事件

// 暴露emitter
export default emitter