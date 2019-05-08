<template>
    <div class="login-container">
        <header>
            <div class="logo" title="">
                <img src="" alt="">
            </div>
            <div class="goBack" @click="$router.go(-1)">
                <img src="../../images/回退.png" alt="">
            </div>
        </header>
        <main>
            <form>
                <input type="tel" placeholder="请输入您的手机号" name="telephone" class="telephone" id="telephone"
                       oninput="if (value.length > 11){value = value.slice(0,11)}" v-model="telephone">
                <div class="VerificationCode" v-if="!usePassword">
                    <input type="tel" placeholder="请输入验证码" name="VerificationCode" class="VerificationCodeInput" id="VerificationCode"
                           oninput="if (value.length > 6){value = value.slice(0,6)}" v-model="VerificationCode">
                    <div :class="{getVerificationCode: true, alreadyGetCode}" @click="sendVerificationCode" :disabled="alreadyGetCode">{{verificationCodeText}}</div>
                </div>
                <input type="text" placeholder="请输入您的密码" name="password" class="password" id="password" v-model="password" v-else>
                <p class="privacy">
                    <span class="isChosen">
                        <input type="checkbox" v-model="isChosen">
                        <img src="../../images/对号.png" alt="" v-if="isChosen">
                        <img src="../../images/对号2.png" alt="" v-else>
                    </span>
                    我已经阅读并同意 <a href="#">使用条款和隐私政策</a>
                </p>
                <mt-button type="primary" size="large" :disabled="!isAllowedLogin" :class="{isAllowedLogin: !isAllowedLogin}"
                           @click.prevent="() => {usePassword? loginByPassword(): loginByVerificationCode()}">登录</mt-button>
                <p class="usePassword"><span @click="usePassword = !usePassword">{{ usePassword? '手机验证登录': '账号密码登录'}}</span></p>
            </form>
        </main>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import md5 from 'blueimp-md5';

    export default {
        name: "Login",
        data () {
            return {
                isChosen: false, //协议确认
                alreadyGetCode: false, //获取验证码成功
                verificationCodeText: '获取验证码',
                timeOut: false, //倒计时
                usePassword: false, //使用密码登录
                rootUrl: this.$store.state.rootUrl,
                telephone: '',
                password: '',
                VerificationCode: '',
            }
        },
        computed: {
            isAllowedLogin () {
                const telephoneReg = /^1\d{10}$/;
                const VerificationCodeReg = /^\d{6}$/;
                if (this.usePassword) {
                    return this.isChosen && telephoneReg.test(this.telephone) && this.password.trim().length > 0
                } else {
                    return this.isChosen && telephoneReg.test(this.telephone) && VerificationCodeReg.test(this.VerificationCode)
                }
            }
        },
        methods: {
            //发送验证码
            sendVerificationCode () {
                let telephone = this.telephone.trim();
                const telephoneReg = /^1\d{10}$/;

                //信息校验
                if (!this.isChosen) {
                    return Toast({
                        message: '请先同意使用条款和隐私政策',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                if (!telephoneReg.test(telephone)) {
                    return Toast({
                        message: '请输入正确的手机号',
                        position: 'bottom',
                        duration: 3000
                    });
                }

                const params = {
                    c: 'sendMessage',
                    a: 'sendSms',
                    mobile: telephone,
                    type: 0
                };
                this.$axios.get(this.rootUrl + '/indexapp.php', {params})
                    .then(res => {
                        let data = res.data;
                        if (data.code == 200) {
                            Toast({
                                message: '发送成功',
                                position: 'bottom',
                                duration: 3000
                            });
                            //倒计时60s
                            if (this.timeOut) {
                                return
                            }
                            let oneMinute = 60;
                            this.alreadyGetCode = true;
                            this.verificationCodeText = oneMinute + 's';
                            oneMinute --;
                            this.timeOut = setInterval(() => {
                                if (oneMinute <= 0) {
                                    this.alreadyGetCode = false;
                                    this.verificationCodeText = '获取验证码';
                                    clearInterval(this.timeOut);
                                    this.timeOut = false;
                                } else {
                                    this.verificationCodeText = oneMinute + 's';
                                    oneMinute --;
                                }

                            }, 1000);
                        } else if (data.code == 102) {
                            Toast({
                                message: data.msg,
                                position: 'bottom',
                                duration: 3000
                            });
                        }
                    })
                    .catch(err => {

                    })

            },

            //验证码登录
            loginByVerificationCode () {
                let telephone = this.telephone.trim();
                let VerificationCode = this.VerificationCode.trim();
                const telephoneReg = /^1\d{10}$/;
                const VerificationCodeReg = /^\d{6}$/;

                //信息校验
                if (!this.isChosen) {
                    return Toast({
                        message: '请先同意使用条款和隐私政策',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                if (!telephoneReg.test(telephone)) {
                    return Toast({
                        message: '请输入正确的手机号',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                if (!VerificationCodeReg.test(VerificationCode)) {
                    return Toast({
                        message: '验证码错误',
                        position: 'bottom',
                        duration: 3000
                    });
                }

                const params = {
                    c: 'User',
                    a: 'loginByMobile',
                    mobile: telephone,
                    code: VerificationCode
                };
                this.$axios.get(this.rootUrl + '/indexapp.php', {params})
                    .then(res => {
                        let data = res.data;
                        console.log(data);
                        if (data.code == 200) {
                            this.$store.commit('setIdAndUserInfo', data);
                        } else {
                            Toast({
                                message: data.msg,
                                position: 'bottom',
                                duration: 3000
                            });
                        }
                    })
                    .catch(err => {

                    })

            },

            //密码登录
            loginByPassword () {
                let telephone = this.telephone.trim();
                let password = this.password.trim();
                const telephoneReg = /^1\d{10}$/;

                //信息校验
                if (!this.isChosen) {
                    return Toast({
                        message: '请先同意使用条款和隐私政策',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                if (!telephoneReg.test(telephone)) {
                    return Toast({
                        message: '请输入正确的手机号',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                if (password.length <= 0) {
                    return Toast({
                        message: '请输入密码',
                        position: 'bottom',
                        duration: 3000
                    });
                }
                const params = {
                    c: 'User',
                    a: 'loginmobile',
                    mobile: telephone,
                    password: md5(password).toLowerCase()
                };
                this.$axios.get(this.rootUrl + '/indexapp.php', {params})
                    .then(res => {
                        let data = res.data;
                        console.log(data);
                        if (data.code == 200) {
                            this.$store.commit('setIdAndUserInfo', data);
                        } else {
                            Toast({
                                message: data.msg,
                                position: 'bottom',
                                duration: 3000
                            });
                        }
                    })
                    .catch(err => {

                    })

            },
        }
    }
</script>

<style lang="less">
    @import "../../less/var.less";
    .login-container {
        height: 100%;
        position: relative;
        header {
            width: 100%;
            height: 210rem/@baseFontSize;
            background: url("../../images/蓝底@2x.png") no-repeat center;
            background-size: cover;
            overflow: hidden;
            position: relative;
            .logo {
                width: 95rem/@baseFontSize;
                height: 95rem/@baseFontSize;
                margin: 73rem/@baseFontSize auto 0;
                background-color: #fff;
                border-radius: 10rem/@baseFontSize;
                img {
                    width:100%
                }
            }
            .goBack {
                position: absolute;
                width: 35rem/@baseFontSize;
                height: 35rem/@baseFontSize;
                top: 29rem/@baseFontSize;
                left: 21rem/@baseFontSize;
                img {
                    width: 100%;
                }
            }
        }
        main {
            form {
                padding: 37rem/@baseFontSize 27rem/@baseFontSize;
                .VerificationCodeInput, .telephone, .password {
                    width: 100%;
                    height: 50rem/@baseFontSize;
                    background-color: #EAE7D6;
                    border-radius: 25rem/@baseFontSize;
                    margin-bottom: 15rem/@baseFontSize;
                    padding: 17rem/@baseFontSize;
                    font-size: 16rem/@baseFontSize;
                    color: #848069;
                }
                .password {
                    margin: 0;
                }
                .VerificationCode {
                    height: 50rem/@baseFontSize;
                    position: relative;
                    .getVerificationCode {
                        height: 100%;
                        width: 85rem/@baseFontSize;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #54D9F6;
                        font-size: 12rem/@baseFontSize;
                        border-radius: 0 25rem/@baseFontSize 25rem/@baseFontSize 0;
                        color: #fff;
                        text-align: center;
                        line-height: 50rem/@baseFontSize;
                        &.alreadyGetCode {
                            background-color: unset;
                        }
                    }
                }
                .privacy {
                    height: 18rem/@baseFontSize;
                    line-height: 18rem/@baseFontSize;
                    padding-left: 11rem/@baseFontSize;
                    margin: 27rem/@baseFontSize 0 42rem/@baseFontSize;
                    font-size: 14rem/@baseFontSize;
                    color: #848069;
                    a {
                        color: #FC7F3A;
                    }
                    .isChosen {
                        width: 18rem/@baseFontSize;
                        height: 18rem/@baseFontSize;
                        position: relative;
                        display: inline-block;
                        vertical-align: bottom;
                        input {
                            width: 18rem/@baseFontSize;
                            height: 18rem/@baseFontSize;
                            background-color: #333;
                            border-radius: 50%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            opacity: 0;
                        }
                        img {
                            width: 100%;
                        }
                    }
                }
                button {
                    width: 100%;
                    height: 50rem/@baseFontSize;
                    border-radius: 25rem/@baseFontSize;
                    background: linear-gradient(to right, #FCC61E, #FCA53A);
                    .mint-button-text {
                        font-size: 18rem/@baseFontSize;
                    }
                    &.isAllowedLogin {
                        background: #BBB;
                    }
                }
                .usePassword {
                    font-size: 16rem/@baseFontSize;
                    color: #FC7F3A;
                    text-align: center;
                    width: 100%;
                    margin-top: 102rem/@baseFontSize;
                }
            }
        }
    }
</style>