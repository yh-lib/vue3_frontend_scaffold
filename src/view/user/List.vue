<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
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

const tableData: User[] = [
  {"id": 1, "username": "user_alpha_01", "qq": "1023456789", "address": "北京市朝阳区建国路 88 号"},
  {"id": 2, "username": "user_beta_02", "qq": "2034567890", "address": "上海市浦东新区陆家嘴环路 100 号"},
  {"id": 3, "username": "user_gamma_03", "qq": "3045678901", "address": "广州市天河区天河路 208 号"},
  {"id": 4, "username": "user_delta_04", "qq": "4056789012", "address": "深圳市南山区科技园科发路 1 号"},
  {"id": 5, "username": "user_epsilon_05", "qq": "5067890123", "address": "杭州市西湖区文三路 259 号"},
  {"id": 6, "username": "user_zeta_06", "qq": "6078901234", "address": "成都市武侯区高新大道 300 号"}
]
</script>

<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <span style="font-size: 24px;">用户列表</span>
                <el-button type="primary">添加</el-button>
            </div>
        </template>
        <el-table :data="filterTableData" style="width: 100%" border >
            <el-table-column label="用户名" prop="username" />
            <el-table-column label="ID" prop="id" />
            <el-table-column label="QQ号" prop="qq" />
            <el-table-column label="地址" prop="address" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>             
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                Edit
                </el-button>
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >
                Delete
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