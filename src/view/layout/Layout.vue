<script setup>
import Aside from './components/Aside.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

</script>

<template>
    <el-container class="el-container">
      <Aside></Aside>
      <el-container class="el-container__el-container">
        <Header class="Header"></Header>
        <Main class="Main"></Main>
        <Footer class="Footer"></Footer>
      </el-container>
    </el-container>
</template>

<style scoped>
.el-container{
  width: 100vw;
  height: 100vh;
  .el-container__el-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .Header{
    height: 20vh;
  }
  .Main{
    height: 60vh;
  }
  .Footer{
    height: 20vh;
  }  
}
</style>
