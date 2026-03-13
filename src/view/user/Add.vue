<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { addUserHandler,updateUserHandler } from '../../api/user.js'
import { ElMessage } from 'element-plus'
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
    console.log("重置参数",props.subMethod)
    userFormRef.value.resetFields()
}
// 加载图标配置
const loading = ref(false)  
// 添加用户：提交表单
const submitForm = (userForm) => {
    userFormRef.value.validate((valid)=>{
      if (valid) {
        loading.value = true
        if (props.subMethod == 'create') {
          addUserHandler(userForm).then((Response)=>{
            ElMessage({
              message: Response.data.msg,
              type: 'success',
            })
            loading.value = false   // 注意：axios是异步运行，必须写在请求里面；
          })
          // 写在这里的话，loading.value = false不会等addUserHandler执行完毕才运行           
        }else{
          updateUserHandler(userForm).then((Response)=>{
            ElMessage({
              message: Response.data.msg,
              type: 'success',
            })
            loading.value = false   // 注意：axios是异步运行，必须写在请求里面；
          })
          // 写在这里的话，loading.value = false不会等addUserHandler执行完毕才运行           
        }
      }else{
          ElMessage({
            message: "请完善表单内容",
            type: 'warning',
          })        
      }
    })
}
// 表单校验
const rules = reactive({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' },],
    qq: [{ required: true, message: '请输入qq号码', trigger: 'blur' }],
    id: [{ required: true, message: '请输入id', trigger: 'blur' }]
})
// 接受父组件的参数
const subMethod = ref('')
const props = defineProps(['subMethod'])
</script>

<template>
  <el-form
    ref="userFormRef"
    :model="userForm"
    label-width="60px"
    center
    class="el-form"
    v-loading="loading"
    :rules="rules"
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
        <el-button type="primary" @click="submitForm(userForm)" > 
          {{ props.subMethod == 'create' ? '提交' : '更新' }}
        </el-button>   
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