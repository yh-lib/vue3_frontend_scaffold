<script setup>
    import { reactive } from 'vue';
    // 导入图标
    import { User, Lock } from '@element-plus/icons-vue';
    const loginInfo = reactive({
        username: '',
        password: '',
    })
</script>

<template>  
  <el-card style="max-width: 900px">
    <!-- 标题 -->
    <h2>kubernetes 管理平台</h2>
    <!-- 表单 -->
    <el-form
        ref="ruleFormRef"
        style="max-width: 900px"
        :model="loginInfo"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
    >
        <!-- 用户名: 输入表单 -->
        <el-form-item prop="checkPass">
            <el-input 
                v-model="loginInfo.username"
                placeholder="输入用户名" 
                :prefix-icon="User" 
                clearable
            />
        </el-form-item>
        <!-- 密码：输入表单 -->
        <el-form-item prop="pass">
            <el-input 
                v-model="loginInfo.password"
                type="password"
                placeholder="输入密码"
                :prefix-icon="Lock"
                show-password
            />
        </el-form-item>
        <!-- 登录：按钮 -->
            <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
    </el-form>    
  </el-card>
  
</template>