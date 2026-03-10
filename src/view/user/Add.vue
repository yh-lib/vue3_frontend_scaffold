<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const userForm = reactive({
    username:"",
    qq:"",
    address:"",
    id:""
})

</script>

<template>
  <el-form
    ref="userFormRef"
    :model="userForm"
    center
  >
    <el-form-item label="姓名" label-width="64px">
      <el-input v-model="userForm.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="ID" label-width="64px">
      <el-input v-model="userForm.id" autocomplete="off" />
    </el-form-item>
    <el-form-item label="QQ" label-width="64px">
      <el-input v-model="userForm.qq" autocomplete="off" />
    </el-form-item>
    <el-form-item label="地址" label-width="64px">
      <el-input v-model="userForm.address" autocomplete="off" />
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="submitForm(userForm)" style="margin: 0 auto 0 30%;">提交</el-button>
        <el-button @click="resetForm(userForm)" style="margin: 0 30% 0 auto;">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
</style>