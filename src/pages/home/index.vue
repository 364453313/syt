<template>
    <div>
        <!-- 首页轮播图结构 -->
        <Carousel />
        <!-- 首页搜索表单 -->
        <Search />
        <!-- 首页医院内容区域 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level />
                <!-- 地区子组件 -->
                <Region />
            </el-col>
            <el-col :span="4">456</el-col>
        </el-row>
    </div> 
</template>

<script setup lang='ts'>
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
</script>

<style scoped lang="scss"></style>