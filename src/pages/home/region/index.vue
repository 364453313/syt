<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li class="active">全部</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li>昌平区</li>
                <li v-for="item in 20" :key='item'>昌平区</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top: 10px;

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
                margin-bottom: 10px;
                &.active {
                    color: #55a6fe;
                }
            }
            li:hover{
                cursor: pointer;
                color: #55a6fe;
            }

        }
    }
}
</style>