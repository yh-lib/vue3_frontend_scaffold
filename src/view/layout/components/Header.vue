<script setup>
import { DArrowLeft,SwitchButton } from '@element-plus/icons-vue'
</script>

<template>
    <div>
        <el-header class="el-header">
            <el-button>
                <el-icon><DArrowLeft /></el-icon>
            </el-button>
            <el-button>
                <el-icon><SwitchButton /></el-icon>
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
