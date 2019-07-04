<template>
    <div class="makeUpCourse-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">补课</span>
        </div>
        <div class="courseList">
            <div class="myCourses">
                <img src="./images/course.png" alt="">
                <h3 class="title">
                    <div>
                        少儿思维<mt-badge size="small" color="#55DDFF">试听课</mt-badge>
                    </div>
                </h3>
                <div class="lessonHour">
                    <p><span>漏课时间:</span><span class="red">2019.4.25</span></p>
                    <p><span>已过预约时间</span></p>
                    <span class="isStart">已补签</span>
                </div>
                <div class="courseInfo">
                    <p>总课时:&nbsp;98</p>
                    <p><span>已上课时:&nbsp;46</span><span>剩余课程:&nbsp;52</span></p>
                    <button class="enter">预约课程</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MakeUpCourse"
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .makeUpCourse-container {
        height: 100%;
        background-color: #fff;
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
        .courseList {
            padding: 20rem/@baseFontSize 21rem/@baseFontSize 0;
            .myCourses {
                height: 335rem/@baseFontSize;
                box-shadow: 0 0 4rem/@baseFontSize rgba(44, 47, 60, 0.1);
                border-radius: 10rem/@baseFontSize;
                img {
                    width: 100%;
                    height: 179rem/@baseFontSize;
                }
                h3 {
                    font-size: 18rem/@baseFontSize;
                    color: #333;
                    font-weight: bold;
                    margin-top: 13rem/@baseFontSize;
                    text-align: center;
                    height: 28rem/@baseFontSize;
                    display: flex;
                    justify-content: center;
                    > div {
                        line-height: 28rem/@baseFontSize;
                        span {
                            height: 16rem/@baseFontSize;
                            width: 45rem/@baseFontSize;
                            border-radius: 8rem/@baseFontSize;
                            background-color: #55DDFF;
                            font-size: 9rem/@baseFontSize;
                            line-height: 16rem/@baseFontSize;
                            padding: 0;
                            text-align: center;
                            position: relative;
                            top: -8rem/@baseFontSize;
                            margin-left: 9rem/@baseFontSize;
                        }
                    }
                }
                .lessonHour {
                    padding: 0 19rem/@baseFontSize;
                    margin-top: 8rem/@baseFontSize;
                    position: relative;
                    .isStart {
                        position: absolute;
                        right: 19rem/@baseFontSize;
                        top: -4rem/@baseFontSize;
                        color: #FFD83D;
                    }
                    p {
                        font-size: 14rem/@baseFontSize;
                        color: #666;
                        height: 22rem/@baseFontSize;
                        margin-bottom: 1rem/@baseFontSize;
                        span {
                            vertical-align: middle;
                        }
                        .red {
                            font-size: 16rem/@baseFontSize;
                            color: #FF3737;
                            margin-left: 11rem/@baseFontSize;
                            margin-right: 28rem/@baseFontSize;
                        }
                    }
                }
                .courseInfo {
                    padding: 0 19rem/@baseFontSize;
                    margin-top: 11rem/@baseFontSize;
                    position: relative;
                    p {
                        font-size: 10rem/@baseFontSize;
                        color: #999;
                        margin-bottom: 3rem/@baseFontSize;
                    }
                    p:last-of-type {
                        span {
                            margin-right: 16rem/@baseFontSize;
                        }
                    }
                    .enter {
                        position: absolute;
                        right: 19rem/@baseFontSize;
                        top: 50%;
                        transform: translate(0, -50%);
                        border: 0;
                        height: 28rem/@baseFontSize;
                        width: 87rem/@baseFontSize;
                        border-radius: 5rem/@baseFontSize;
                        background-color: #FCC93A;
                        font-size: 12rem/@baseFontSize;
                        line-height: 28rem/@baseFontSize;
                        color: #fff;
                    }
                }
            }
        }
    }

</style>
