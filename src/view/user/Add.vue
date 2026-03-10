<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
// 定义用户属性
const userForm = reactive({
    username:"",
    qq:"",
    address:"",
    id:""
})
// 重置表单
const userFormRef = ref()
const resetForm = () => {
    userFormRef.value.resetFields()
}
</script>

<template>
  <el-form
    ref="userFormRef"
    :model="userForm"
    label-width="64px"
    center
  >
    <!-- 表单 -->
    <el-form-item label="姓名"  prop="username">
      <el-input v-model="userForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="ID"  prop="id">
      <el-input v-model="userForm.id" autocomplete="off" />
    </el-form-item>
    <el-form-item label="QQ"  prop="qq">
      <el-input v-model="userForm.qq" autocomplete="off" />
    </el-form-item>
    <el-form-item label="地址"  prop="address">
      <el-input v-model="userForm.address" autocomplete="off" />
    </el-form-item>
    <!-- 按钮 -->
    <el-form-item>
        <el-button type="primary" @click="submitForm(userForm)" style="margin: 0 auto 0 30%;">提交</el-button>
        <el-button @click="resetForm()" style="margin: 0 30% 0 auto;">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
</style>