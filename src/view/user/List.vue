<script lang="ts" setup>
import { computed, reactive, ref, onMounted, onBeforeMount  } from 'vue'
import { getUserListHandler,deleteUserHandler } from '../../api/user.js'
import { User } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import Add from './Add.vue'

interface User {
  username: string
  address: string
  id: number
  qq: string
}

const search = ref('')

const filterTableData = computed(() =>
  data.tableData.filter(
    (data) =>
      !search.value ||
      data.username.toLowerCase().includes(search.value.toLowerCase())
  )
)

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const data = reactive({
    tableData:[] as User[]
})

// 获取后端数据
const getUserList = () =>{
    getUserListHandler().then((response)=>{
        if (response.status === 200) {
            data.tableData = response.data.data; // 更新 tableData
            loading.value = false
        } else {
            console.error('获取用户列表失败:', response.msg);
        }
    })
}
// 组件加载时自动调用 getUserList 方法
onBeforeMount(() => {
    getUserList();
})

// 加载图标
const loading = ref(true)

// 删除用户
const deleteUser = (row) => {
    // 删除提醒
    ElMessageBox.confirm(
    '确认删除用户：' + row.username,
    {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
    }
    )
    .then(() => {
        deleteUserHandler(row.id).then((response)=>{
            ElMessage({
                type: 'success',
                message: response.data.msg,
            })
        })        
    })
    .catch(() => {
        return
    }) 
}

// 添加用户
const addUserDialog = ref(false)

const addUser = () => {
    addUserDialog.value = true
}

</script>

<template>
    <el-card>
        <!-- 添加用户的表单 -->
        <el-dialog 
            v-model="addUserDialog"
            title="添加用户"
            width="30%"
        >
            <!-- 添加用户的表单组件 -->
            <Add />
        </el-dialog>
        <template #header>
            <div class="card-header">
                <span style="font-size: 24px;">用户列表</span>
                <el-button type="primary" @click="addUser">添加</el-button>
            </div>
        </template>
        <el-table :data="filterTableData" style="width: 100%" border height="600px" v-loading="loading">
            <el-table-column label="用户名"  prop="username" />
            <el-table-column label="ID"   prop="id" />
            <el-table-column label="QQ号" prop="qq" />
            <el-table-column label="地址" prop="address" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>             
            <template #default="scope">
                <el-button size="small" @click="editUser(scope.$index, scope.row)">
                    编辑
                </el-button>
                <el-button
                    size="small"    
                    type="danger"
                    @click="deleteUser(scope.row)"
                >
                    删除
                </el-button>
            </template>
            </el-table-column>
        </el-table>      
    </el-card>
</template>

<style scoped>
.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>