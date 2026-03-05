<script setup>
    import { ref,reactive, watch } from 'vue';
    // 导入图标
    import { User, Lock } from '@element-plus/icons-vue';
    const loginInfo = reactive({
        username: '',
        password: '',
    })
    // 表单校验
    const rules = reactive({
        username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '请输入6位以上的密码', trigger: 'blur' },
        ],
    })
    // 声明 loginRef，用于存放表单数据
    const loginRef = ref()
    // 表单校验失败时，禁用登录按钮
    let loginButtonDisabled = ref(true)
    watch(
        [
            () => loginInfo.username,
            () => loginInfo.password
        ],
        () => {
            loginRef.value.validate(
                (valid) => {
                    valid?loginButtonDisabled.value = false : loginButtonDisabled.value = true
                }
            )
        }
    )
</script>

<template>  
  <el-card style="max-width: 900px">
    <!-- 标题 -->
    <h2>kubernetes 管理平台</h2>
    <!-- 表单 -->
    <el-form
        ref="loginRef"
        style="max-width: 900px"
        :model="loginInfo"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
    >
        <!-- 用户名: 输入表单 -->
        <el-form-item prop="username">
            <el-input 
                v-model="loginInfo.username"
                placeholder="输入用户名" 
                :prefix-icon="User" 
                clearable
            />
        </el-form-item>
        <!-- 密码：输入表单 -->
        <el-form-item prop="password">
            <el-input 
                v-model="loginInfo.password"
                type="password"
                placeholder="输入密码"
                :prefix-icon="Lock"
                show-password
            />
        </el-form-item>
        <!-- 登录：按钮 -->
            <el-button type="primary" @click="submitForm(ruleFormRef)" :disabled="loginButtonDisabled"> 登录 </el-button>
    </el-form>    
  </el-card>
</template>