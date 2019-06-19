<template>
    <div class="course-container">
        <h1>我的课程
            <img src="./images/补课-可点击@2x.png" alt="" v-if="'true'" @click="$router.push('/console/course/MakeUpCourse')">
            <img src="./images/补课-不可点击@2x.png" alt="" v-else @click="$router.push('/console/course/MakeUpCourse')">
        </h1>
        <div class="myCourses">
            <img src="./images/course.png" alt="">
            <h3 class="title">
                <div>
                    少儿思维<mt-badge size="small" color="#55DDFF">试听课</mt-badge>
                </div>
            </h3>
            <div class="lessonHour">
                <p><span>总课时:</span><span class="red">98</span></p>
                <p><span>已上课时:</span><span class="red">46</span><span>剩余课程:</span><span class="red">52</span></p>
                <span class="isStart">未开始</span>
            </div>
            <div class="courseInfo">
                <p>课程价格:&nbsp;15600</p>
                <p>课程日期:&nbsp;2019.4.15</p>
                <p>课程时间:&nbsp;7:30-8:30</p>
                <button class="enter">点击进入</button>
            </div>
        </div>
    </div>
</template>

<script>
    import NotFound from '../common/NotFound.vue';

    export default {
        name: "Course",
        data () {
          return {

          }
        },
        components: {
            NotFound
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .course-container {
        padding: 0 21rem/@baseFontSize 0;
        h1 {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            font-size: 22rem/@baseFontSize;
            color: #333;
            font-weight: bold;
            text-align: center;
            position: relative;
            img {
                height: 25rem/@baseFontSize;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
            }
        }
        .myCourses {
            height: 342rem/@baseFontSize;
            box-shadow: 0 0 4rem/@baseFontSize rgba(44, 47, 60, 0.1);
            border-radius: 10rem/@baseFontSize;
            margin-top: 15rem/@baseFontSize;
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
</style>
