<template>
    <div class="homepage-container">
        <h1>欢迎来到少儿思维</h1>
        <h3><img src="./images/矩形4@2x.png" alt=""><span>少儿思维课程体系</span></h3>
        <div class="banner"></div>
        <h3><img src="./images/矩形4@2x.png" alt=""><span>特色课程</span></h3>
        <div class="specialCourses">
            <img src="./images/course.png" alt="">
            <img src="./images/course.png" alt="">
        </div>
        <div class="signUp">
            <div>
                <span>少儿思维</span>
                <span>在线报名</span>
            </div>
            <button @click="$router.push('/login')">点击报名</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .homepage-container {
        padding: 25rem/@baseFontSize 21rem/@baseFontSize 80rem/@baseFontSize;

        h1 {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            font-size: 22rem/@baseFontSize;
            color: #333;
            font-weight: bold;
        }
        h3 {
            height: 24rem/@baseFontSize;
            line-height: 24rem/@baseFontSize;
            font-size: 18rem/@baseFontSize;
            color: #555;
            font-weight: bold;
            margin-top: 4rem/@baseFontSize;
            img {
                width: 4rem/@baseFontSize;
                margin-right: 8rem/@baseFontSize;
                vertical-align: bottom;
                margin-bottom: 5rem/@baseFontSize;
            }

        }
        .banner {
            height: 154rem/@baseFontSize;
            border-radius: 10rem/@baseFontSize;
            background-color: #BBF1FE;
            margin-top: 19rem/@baseFontSize;
            margin-bottom: 24rem/@baseFontSize;
            box-shadow: 0 50rem/@baseFontSize 26rem/@baseFontSize -33rem/@baseFontSize rgba(31, 188, 227, 0.6);
        }
        .specialCourses {
            height: 154rem/@baseFontSize;
            display: flex;
            justify-content: space-around;
            margin-top: 19rem/@baseFontSize;
            img {
                border-radius: 10rem/@baseFontSize;
                height: 154rem/@baseFontSize;
                width: 156rem/@baseFontSize;
            }
        }
        .signUp {
            height: 78rem/@baseFontSize;
            border-radius: 10rem/@baseFontSize;
            margin-top: 22rem/@baseFontSize;
            background: linear-gradient(to right, #FCC61E, #FCA53A);
            > div {
                height: 100%;
                width: 80rem/@baseFontSize;
                font-size: 18rem/@baseFontSize;
                color: #fff;
                float: left;
                margin-left: 44rem/@baseFontSize;
                span:first-of-type {
                    display: inline-block;
                    margin-top: 14rem/@baseFontSize;
                    margin-bottom: 0rem/@baseFontSize;
                }
            }
            button {
                float: right;
                width: 101rem/@baseFontSize;
                height: 32rem/@baseFontSize;
                line-height: 32rem/@baseFontSize;
                border-radius: 16rem/@baseFontSize;
                margin-top: 23rem/@baseFontSize;
                margin-right: 20rem/@baseFontSize;
                border: 0;
                background-color: rgba(255,255,255,.2);
                color: #fff;
                font-size: 16rem/@baseFontSize;
            }
        }
    }
</style>