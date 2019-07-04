<template>
    <div class="personalInfo-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">个人信息</span>
            <span class="save">保存</span>
        </div>
        <div class="list">
            <div @click="$router.push('/console/user/personalInfo/avatar')">
                <mt-cell title="头像" >
                    <img src="./images/avatar.png" alt="" class="avatar">
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
            <div @click="$router.push('/console/user/personalInfo/modifyName')">
                <mt-cell title="姓名">
                    <span class="text">小魔仙</span>
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
            <div @click="$router.push('/console/user/personalInfo/modifyGender')">
                <mt-cell title="性别">
                    <span class="text">女</span>
                    <span class="arrow-right-small"></span>
                </mt-cell>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalInfo"
    }
</script>

<style lang="less">
    @import "../../less/var.less";
    .personalInfo-container {
        height: 100%;
        width: 100%;
        background-color: #fff;
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
            .save {
                font-size: 18rem/@baseFontSize;
                color: #FCC93A;
                float: right;
                margin-right: 21rem/@baseFontSize;
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
                    .text {
                        margin-right: 45rem/@baseFontSize;
                        font-size: 16rem/@baseFontSize;
                        color: #333;
                    }
                    .avatar {
                        height: 30rem/@baseFontSize;
                        width: 30rem/@baseFontSize;
                        margin-right: 45rem/@baseFontSize;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
</style>
