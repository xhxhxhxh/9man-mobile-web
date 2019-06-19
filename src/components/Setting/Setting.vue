<template>
    <div class="setting-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">设置</span>
        </div>
        <div class="list">
            <div @click="$router.push('/console/user/setting/reset')">
                <mt-cell title="修改密码" >
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
            <div>
                <mt-cell title="清除缓存">
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
            <div>
                <mt-cell title="关于我们">
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
        </div>
        <button class="logout" @click="logout">退出登录</button>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        methods: {
            // 退出登录
            logout () {
                localStorage.removeItem('id');
                this.$store.commit('setIdentity', '');
                this.$router.push('/console/notLogin');
            }
        }
    }
</script>

<style lang="less">
    @import "../../less/var.less";
    .setting-container {
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
        position: relative;
        .goBack {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            box-shadow: 0 3rem/@baseFontSize 6rem/@baseFontSize -3rem/@baseFontSize rgba(136, 153, 191, 0.1);
            position: relative;
            z-index: 999;
            background-color: #fff;
            .title {
                font-size: 18rem/@baseFontSize;
                color: #333;
                margin-left: 47rem/@baseFontSize;
            }
        }
        .list {
            background-color: #fff;
            padding-left: 20rem/@baseFontSize;
            > div > a {
                height: 60rem/@baseFontSize;
                border-bottom: 1rem/@baseFontSize solid #F3F3F3;
                background-image: unset;
                .mint-cell-wrapper {
                    background-image: unset;
                    height: 100%;
                    padding: 0;
                    .mint-cell-title {
                        font-size: 18rem/@baseFontSize;
                        color: #333;
                    }

                }
            }
        }
        .logout {
            width: 290rem/@baseFontSize;
            height: 45rem/@baseFontSize;
            line-height: 45rem/@baseFontSize;
            border-radius: 5rem/@baseFontSize;
            background-color: #FF5159;
            color: #fff;
            font-size: 18rem/@baseFontSize;
            position: absolute;
            bottom: 45rem/@baseFontSize;
            left: 50%;
            transform: translate(-50%, 0);
            border: 0;
        }
    }
</style>
