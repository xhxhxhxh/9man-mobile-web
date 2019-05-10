<template>
    <div class="modifyGender-container">
        <header></header>
        <div class="goBack">
            <span @click="$router.go(-1)">取消</span>
            <span class="title">设置性别</span>
            <span class="save">完成</span>
        </div>
        <div class="list">
            <div class="gender">
                <div class="male" @click="gender = 0">
                    <span>男</span>
                    <i class="fa fa-check" aria-hidden="true" v-show="gender == 0"></i>
                </div>
                <div class="female" @click="gender = 1">
                    <span>女</span>
                    <i class="fa fa-check" aria-hidden="true" v-show="gender == 1"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModifyGender",
        data () {
            return {
                gender: 0
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .modifyGender-container {
        height: 100%;
        width: 100%;
        background-color: #F5F5F5;
        header {
            height: 25rem/@baseFontSize;
            background-color: #fff;
        }
        .goBack {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            padding: 0 25rem/@baseFontSize;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            box-shadow: 0 3rem/@baseFontSize 6rem/@baseFontSize -3rem/@baseFontSize rgba(136, 153, 191, 0.1);
            font-size: 14rem/@baseFontSize;
            position: relative;
            z-index: 999;
            .title {
                font-size: 18rem/@baseFontSize;
                color: #333;
                height: 60rem/@baseFontSize;
                position: absolute;
                top: 27rem/@baseFontSize;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .save {
                color: #FCC93A;
            }
        }
        .list {
            padding: 15rem/@baseFontSize 0;
            .gender {
                padding-left: 25rem/@baseFontSize;
                background-color: #fff;
                border-top: 0.5rem/@baseFontSize solid #ccc;
                border-bottom: 0.5rem/@baseFontSize solid #ccc;
                > div {
                    height: 40rem/@baseFontSize;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span {
                        font-size: 14rem/@baseFontSize;
                        color: #333;
                    }
                    i {
                        margin-right: 25rem/@baseFontSize;
                        color: dodgerblue;
                        font-size: 14rem/@baseFontSize;
                        font-weight: normal;
                    }
                }
                .male {
                    border-bottom: 0.5rem/@baseFontSize solid #ccc;
                }
            }
        }
    }
</style>