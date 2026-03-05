<script setup>
    import { reactive } from 'vue';

    const loginInfo = reactive({
        username: '',
        password: '',
    })
</script>

<template>  
  <el-card style="max-width: 480px">
    <!-- 标题 -->
    <h2>kubernetes Manager</h2>
    <!-- 表单 -->
    <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="loginInfo"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
    >
        <!-- 用户名 -->
        <el-form-item prop="checkPass">
        <el-input
            v-model="loginInfo.username"
        />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pass">
        <el-input v-model="loginInfo.password" type="password" />
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
        </el-button>
        </el-form-item>
    </el-form>    

  </el-card>
  
</template>