<template>
    <div class="user-container">
        <img src="./images/设置@2x.png" alt="" class="setting" @click="$router.push('/console/user/setting')">
        <div class="avatar">
            <img src="./images/avatar.png" alt="" @click="$router.push('/console/user/personalInfo')">
            <span class="username">小魔仙</span>
<!--            <router-link>登录/注册</router-link>-->
        </div>
        <div class="starAndMedal">
            <div class="star">
                <img src="./images/星星@2x.png" alt="">
                <span>8</span>
            </div>
            <div class="line"></div>
            <div class="medal">
                <img src="./images/徽章@2x.png" alt="">
                <span>12</span>
            </div>
        </div>
        <div class="list">
            <div>
                <mt-cell title="推荐有奖">
                    <span class="arrow-right"></span>
                </mt-cell>
            </div>
           <div>
               <mt-cell title="客服与帮助">
                   <span class="arrow-right"></span>
               </mt-cell>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
            return {
                isLogin: false
            }
        }
    }
</script>

<style lang="less">
    @import "../../less/var.less";
    .user-container {
        padding: 25rem/@baseFontSize 0;
        position: relative;
        .setting {
            height: 20rem/@baseFontSize;
            position: absolute;
            right: 20rem/@baseFontSize;
            top: 45rem/@baseFontSize;
        }
        .avatar {
            height: 63rem/@baseFontSize;
            margin-top: 54rem/@baseFontSize;
            line-height: 63rem/@baseFontSize;
            img {
                height: 63rem/@baseFontSize;
                width: 63rem/@baseFontSize;
                border-radius: 50%;
                border: 3rem/@baseFontSize solid rgba(255, 255, 255, 1);
                box-shadow: 0 0 10rem/@baseFontSize 1rem/@baseFontSize rgba(47, 48, 62, 0.1);
                margin-left: 38rem/@baseFontSize;
            }
            span {
                font-size: 26rem/@baseFontSize;
                color: #303030;
                font-family: SourceHanSansSC-Medium,PingFangSC-Light,PingFang-Medium,PingFangSC-Regular,Helvetica,Droid Sans,Arial,sans-serif;
                font-weight: 600;
                margin-left: 29rem/@baseFontSize;
            }
        }
        .starAndMedal {
            height: 90rem/@baseFontSize;
            border-bottom: 1rem/@baseFontSize solid #F3F3F3;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 17rem/@baseFontSize;
            .line {
                height: 23rem/@baseFontSize;
                width: 2rem/@baseFontSize;
                background-color: #aaa;
            }
            > div {
                height: 50rem/@baseFontSize;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                img {
                    width: 23rem/@baseFontSize;
                }
                span {
                    font-size: 16rem/@baseFontSize;
                    color: #505050;
                }
            }
            > div:last-child {
                img {
                    width: 18rem/@baseFontSize;
                }
            }
        }
        .list {
            padding-left: 23rem/@baseFontSize;
            > div > a {
                height: 50rem/@baseFontSize;
                border-bottom: 1rem/@baseFontSize solid #F3F3F3;
                background-image: unset;
                .mint-cell-wrapper {
                    background-image: unset;
                    height: 100%;
                    padding: 0;
                    .mint-cell-title {
                        font-size: 18rem/@baseFontSize;
                        color: #505050;
                        font-weight: bold;
                    }
                }
            }
        }
    }

</style>