<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li :class="{ active: regionFlag == '' }" @click="changeRegion('')">全部</li>
                <li v-for="region in regionArr" :key='region.id' @click="changeRegion(region.value)"
                    :class="{ active: regionFlag == region.value }">{{ region.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { reqHospitalLevelAndRegion } from '@/api/home'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
let regionArr = ref<HospitalLevelAndRegionArr>([])
let regionFlag = ref<string>('')
onMounted(() => {
    getRegion()
})
const getRegion = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
    if (result.code === 200) {
        regionArr.value = result.data
    }
}
const changeRegion = (region: string) => {
    regionFlag.value = region
}
</script>

<script lang="ts">
export default {
    name: "Region"
}
</script>

<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-bottom: 20px;

    .content {
        display: flex;

        .left {
            margin-right: 10px;
            white-space: nowrap;
        }

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                margin-right: 10px;
                margin-bottom: 15px;

                &.active {
                    color: #55a6fe;
                }
            }

            li:hover {
                cursor: pointer;
                color: #55a6fe;
            }

        }
    }
}
</style>