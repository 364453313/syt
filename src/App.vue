<template>
        <div class="container">
            <!-- 顶部全局组件 -->
            <HospitalTop />
            <div class="content">
                hahahhahah
            </div>
            <HospitalBottom />
        </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .content{
            width: 1200px;
            min-height: 700px;
            margin-top: 70px;
        }
    }
</style>