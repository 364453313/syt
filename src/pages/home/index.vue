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
                <div class="hospital">
                    <!-- 医院卡片 -->
                    <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
                </div>
                <!-- 分页器 -->
                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                    :background="true" layout="prev, pager, next, jumper,->, sizes, total" :total="total"
                    @current-change="currentChange" @size-change="sizeChange" />
            </el-col>
            <el-col :span="4">456</el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { reqHospital } from '@/api/home'
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import type { Content, HospitalResponseData } from '@/api/home/type'

// 默认页码
let pageNo = ref<number>(1)
// 一页展示几条数据
let pageSize = ref<number>(10)
let hasHospitalArr = ref<Content>([])
let total = ref<number>(0)
// 组件挂在完毕发一次请求
onMounted(() => {
    reqHospitalInfo()
})

// 封装请求
const reqHospitalInfo = async () => {
    let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value)
    if (result.code === 200) {
        hasHospitalArr.value = result.data.content
        total.value = result.data.totalElements
    }
}
// 页面改变时触发
const currentChange = () => {
    reqHospitalInfo()
}

const sizeChange = () => {
    reqHospitalInfo()
}
</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin-top: 10px;
    }
}

:deep(.el-pagination) {
    margin-top: 20px;
}
</style>