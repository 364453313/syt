<template>
    <div class="search">
        <el-autocomplete clearable class="inline-input w-50"
            placeholder="请输入医院名称" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang='ts'>
// 引入图标
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    :deep(.el-input__wrapper){
        width: 600px;
        height: 45px;
        margin-right: 8px;
    }
    :deep(.el-button){
        height: 45px;
    }
}
</style>