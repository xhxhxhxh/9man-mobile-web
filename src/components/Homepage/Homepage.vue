<template>
    <div class="homepage-container">
        <h1>欢迎来到少儿思维</h1>
        <h3><img src="./images/矩形4@2x.png" alt=""><span>少儿思维课程体系</span></h3>
        <div class="banner" @click="$router.push('/console/homepage/propaganda')"></div>
        <div class="signUp"></div>
        <h3><img src="./images/矩形4@2x.png" alt=""><span>特色课程</span></h3>
        <div class="specialCourses">
            <img src="./images/course1.png" alt="">
            <img src="./images/course2.png" alt="">
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
        padding: 0 21rem/@baseFontSize 80rem/@baseFontSize;

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
            background: url("./images/banner.png") no-repeat center;
            background-size: cover;
            margin-top: 19rem/@baseFontSize;
            margin-bottom: 23rem/@baseFontSize;
            box-shadow:0 26px 50px -26px rgba(252,201,58,0.5);
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
            height: 100rem/@baseFontSize;
            background: url("./images/signUp.png") no-repeat center;
            background-size: contain;
            margin-top: 22rem/@baseFontSize;

        }
    }
</style>
