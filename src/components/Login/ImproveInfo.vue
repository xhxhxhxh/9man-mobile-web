<template>
    <div class="ImproveInfo-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">完善信息</span>
        </div>
        <div class="info">
            <form id="infoForm">
                <div class="nameInput">
                    <label for="name">姓名：</label>
                    <input type="text" id="name">
                </div>
                <div class="passwordInput">
                    <label for="password">密码：</label>
                    <input type="text" id="password">
                </div>
                <div class="confirmInput">
                    <label for="confirm">确认密码：</label>
                    <input type="text" id="confirm">
                </div>
                <div class="gender">
                    <div class="male">
                        <input type="radio" value="1" name="gender" id="male" v-model="gender">
                        <img src="./images/selected.png" alt="" v-if="gender == 1">
                        <img src="./images/unSelected.png" alt="" v-else>
                        <label for="male">男</label>
                    </div>
                    <div class="female">
                        <input type="radio" value="0" name="gender" id="female" v-model="gender">
                        <img src="./images/selected.png" alt="" v-if="gender == 0">
                        <img src="./images/unSelected.png" alt="" v-else>
                        <label for="female">女</label>
                    </div>
                </div>
                <button class="confirm">确&nbsp;认</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImproveInfo",
        data () {
            return {
                gender: 1
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .ImproveInfo-container {
        padding: 25rem/@baseFontSize 0;
        width: 100%;
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
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .info {
            padding: 32rem/@baseFontSize 21rem/@baseFontSize 0;
            form {
                height: 338rem/@baseFontSize;
                box-shadow: 0 0 4rem/@baseFontSize rgba(44, 47, 60, 0.1);
                border-radius: 10rem/@baseFontSize;
                padding: 36rem/@baseFontSize 28rem/@baseFontSize 30rem/@baseFontSize;
                > div {
                    height: 30rem/@baseFontSize;
                    line-height: 30rem/@baseFontSize;
                    border-bottom: 1rem/@baseFontSize solid #717171;
                    margin-bottom: 22rem/@baseFontSize;
                    display: flex;
                    > label {
                        display: inline-block;
                        width: 80rem/@baseFontSize;
                        font-size: 16rem/@baseFontSize;
                        color: #666;
                    }
                    input {
                        font-size: 16rem/@baseFontSize;
                        color: #666;
                    }
                }
                .gender {
                    border: 0;
                    margin-top: 30rem/@baseFontSize;
                    margin-bottom: 0;
                    > div:first-of-type {
                        margin-right: 63rem/@baseFontSize;
                        margin-left: 41rem/@baseFontSize;
                    }
                    > div {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 66rem/@baseFontSize;
                        input {
                            width: 15rem/@baseFontSize;
                            height: 15rem/@baseFontSize;
                            border-radius: 50%;
                            border: 1px solid #333;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(0, -50%);
                            opacity: 0;
                        }
                        label {
                            font-size: 22rem/@baseFontSize;
                            color: #333;
                        }
                        img {
                            width: 15rem/@baseFontSize;
                            height: 15rem/@baseFontSize;
                        }
                    }
                }
                .confirm {
                    width: 100%;
                    height: 45rem/@baseFontSize;
                    line-height: 45rem/@baseFontSize;
                    border-radius: 10rem/@baseFontSize;
                    background: url("./images/confirm.png") no-repeat;
                    background-size: cover;
                    font-size: 18rem/@baseFontSize;
                    color: #fff;
                    margin: 34rem/@baseFontSize auto 0;
                    border: 0;
                }
            }
        }
    }
</style>