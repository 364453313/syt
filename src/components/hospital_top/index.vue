<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="logo">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.top {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 70px;
    background-color: #eee;
    display: flex;
    justify-content: center;

    .content {
        width: 1200px;
        height: 70px;
        background-color: #eee;
        display: flex;
        justify-content: space-between;

        .left {
            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            display: flex;
            justify-content: center;
            align-items: center;

            p {
                color: #55a6fe;
                font-size: 20px;
            }
        }

        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #aaa;
            font-size: 14px;

            .help {
                margin-right: 10px;
            }
        }
    }
}</style>