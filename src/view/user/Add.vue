<script lang="ts" setup>
import { reactive, ref } from 'vue'
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
    label-width="60px"
    center
    class="el-form"
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
     <div class="button-group">
        <el-button type="primary" @click="submitForm(userForm)" >提交</el-button>   
        <el-button @click="resetForm()">重置</el-button>
     </div>
    

  </el-form>
</template>

<style scoped>
.el-form .el-form-item{
    width: 70%;
    margin-top: 10px;
    margin-left: 50px;
}

.button-group {
  display: flex;             /* 启用 Flex 布局 */
  justify-content: center;  /* 让按钮组整体居中 */
  gap: 40px;                 /* 【关键】两个按钮之间的间距 */
  margin-top: 20px;          /* 与上方表单的间距 */
}
</style>