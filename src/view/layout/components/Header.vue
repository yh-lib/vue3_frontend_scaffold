<script setup>
import { DArrowLeft,SwitchButton } from '@element-plus/icons-vue'
import { logout } from '../../../api/login';
</script>

<template>
    <div>
        <el-header class="el-header">
            <el-button>
                <el-icon size="20" ><DArrowLeft /></el-icon>
            </el-button>
            <el-button @click="logout">
                <el-icon size="20"><SwitchButton /></el-icon>
            </el-button>
        </el-header>
    </div>
</template>   

<style lang="less" scoped>
.el-header{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    button{
        border: 0;
    }
}
</style>
