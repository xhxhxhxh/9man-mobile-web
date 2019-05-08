<template>
    <div class="reset-container">
        <header></header>
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">修改密码</span>
        </div>
        <div class="list">
            <div class="telephone">
                <label for="telephone">手机号</label>
                <input type="text" name="telephone" id="telephone" value="13587445654" disabled>
            </div>
            <div class="VerificationCode">
                <label for="VerificationCode">验证码</label>
                <input type="tel" name="VerificationCode" id="VerificationCode" placeholder="请输入验证码"
                       oninput="if (value.length > 6){value = value.slice(0,6)}">
                <button class="getVerificationCode">获取验证码</button>
            </div>
            <div class="newPassword">
                <label for="newPassword">新密码</label>
                <input type="text" name="newPassword" id="newPassword" placeholder="请输入新密码">
            </div>
            <div class="confirmPassword">
                <label for="confirmPassword">确认</label>
                <input type="text" name="confirmPassword" id="confirmPassword" placeholder="请再次输入密码">
            </div>
        </div>
        <button class="confirmReset">确认修改</button>
    </div>
</template>

<script>
    export default {
        name: "Reset"
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .reset-container {
        height: 100%;
        background-color: #F5F5F5;
        position: relative;
        header {
            height: 25rem/@baseFontSize;
            background-color: #fff;
        }
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
            padding-left: 21rem/@baseFontSize;
            .VerificationCode {
                position: relative;
                .getVerificationCode {
                    width: 90rem/@baseFontSize;
                    height: 30rem/@baseFontSize;
                    line-height: 30rem/@baseFontSize;
                    border-radius: 4rem/@baseFontSize;
                    background-color: #FCC93A;
                    color: #fff;
                    font-size: 14rem/@baseFontSize;
                    position: absolute;
                    right: 22rem/@baseFontSize;
                    top: 50%;
                    transform: translate(0, -50%);
                    border: 0;
                }
            }
            > div {
                height: 60rem/@baseFontSize;
                border-bottom: 1rem/@baseFontSize solid #F3F3F3;
                display: flex;
                align-items: center;
                label {
                    font-size: 18rem/@baseFontSize;
                    color: #333;
                    margin-right: 35rem/@baseFontSize;
                    width: 54rem/@baseFontSize;
                }
                input {
                    font-size: 16rem/@baseFontSize;
                    color: #333;
                    background-color: #fff;
                }
                input::-webkit-input-placeholder{
                    font-size: 16rem/@baseFontSize;
                    color: #999;
                }
                input::-moz-placeholder{   /* Mozilla Firefox 19+ */
                    font-size: 16rem/@baseFontSize;
                    color: #999;
                }
                input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                    font-size: 16rem/@baseFontSize;
                    color: #999;
                }
                input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
                    font-size: 16rem/@baseFontSize;
                    color: #999;
                }
            }
            > a {
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
        .confirmReset {
            width: 333rem/@baseFontSize;
            height: 40rem/@baseFontSize;
            line-height: 40rem/@baseFontSize;
            border-radius: 5rem/@baseFontSize;
            background-color: #FCC93A;
            font-size: 16rem/@baseFontSize;
            color: #FEFEFE;
            margin: 30rem/@baseFontSize auto 0;
            display: block;
            border: 0;
        }
    }

</style>