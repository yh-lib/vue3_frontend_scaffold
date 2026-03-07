<script setup>
import { RouterLink , RouterView , useRoute , useRouter } from 'vue-router';
// step23
// import { router } from './router/index.js'

// userouter
const router = useRouter()

// 这俩 router 等价？



const route = useRoute()
const getUsername = () =>{
  console.log("username:" , route.params.username)
}



// step22
const user = () =>{
  // 1. 字符串路径
  // router.push("/")
  // step33
  // 2. 带有路径的对象
  // router.push({
  //   path: "/about"
  // })
  // 3. 命名的路由，并加上参数，让路由建立 url
  router.push({ name: 'user', params: { username: 'eduardo' } })
  // 4. 带查询参数，结果是 /register?plan=private
  // router.push({ path: '/register', query: { plan: 'private' } })
  // router.push({ path: '/about', hash: '#team' })
}

</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <!-- step5: 创建路由链接 -->
    <RouterLink to="/">Go to Home</RouterLink><br>
    <RouterLink to="/about">Go to About</RouterLink><br>
    <!-- step13： 创建动态路由链接 -->
    <RouterLink to="/user/lisi">用户页</RouterLink>
  </nav>
  <div>
    <!-- step21 -->
    <button type="button" @click="getUsername()">首页</button>
  </div>
  <main>
    <!-- step6 渲染路由对应的组件内容 -->
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
