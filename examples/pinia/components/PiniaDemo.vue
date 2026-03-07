<script setup>
// step3: 导入 store 和 storeToRefs
import { storeToRefs } from 'pinia'
import { useDemoStore } from '../store/index.js'

// step4: 从 store 中解构出 msg 属性，并使用 storeToRefs 包装它，以便在模板中使用时保持响应性
const store = useDemoStore()
// 提取sotre中的响应式属性
const { msg, msg2 } = storeToRefs(store)
// step12: 从 store 中解构出 changeMsg Action
const { changeMsg } = store

console.log(msg.value) // 输出 "Hello, Pinia!"
console.log(msg2.value) 
</script>
<template>
    <!-- step5: 在模板中使用 msg 属性 -->
    <div>
        <p> {{ msg }}  </p>
        <p> {{ msg2 }} </p>
         <!-- step13: 在模板中使用 changeMsg 方法 -->
        <button @click="changeMsg('valu3', 'valu4')">修改msg</button>
    </div>
</template>