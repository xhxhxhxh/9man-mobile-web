<template>
    <div class="bottomNav-container">
        <router-link to="/console/homepage" class="homepage">
            <span>
                <img src="./images/房子@2x(1).png" alt="" v-if="hashAddress != 'homepage'">
                <img src="./images/房子@2x.png" alt="" v-else>
                <span :class="{isChosen: hashAddress == 'homepage'}">主页</span>
            </span>
        </router-link>
        <router-link to="/console/course" class="course">
            <span>
                <img src="./images/课程@2x(1).png" alt="" v-if="hashAddress != 'course'">
                <img src="./images/课程@2x.png" alt="" v-else>
                <span :class="{isChosen: hashAddress == 'course'}">我的课程</span>
            </span>
        </router-link>
        <router-link to="/console/user" class="user">
            <span>
                <img src="./images/我的@2x(1).png" alt="" v-if="hashAddress != 'user'">
                <img src="./images/我的@2x.png" alt="" v-else>
                <span :class="{isChosen: hashAddress == 'user'}">我的</span>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "BottomBar",
        data () {
            return {
                hashAddress: this.$route.path.substr(9),
            }
        },
        watch:{
            $route(to,from){
                this.hashAddress = to.path.substr(9)
                console.log(to);
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .bottomNav-container {
        width: 100%;
        height: 50rem/@baseFontSize;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        background-color: #fff;
        box-shadow: 0 -2rem/@baseFontSize 3rem/@baseFontSize rgba(136, 153, 191, 0.2);
        a {
            display: flex;
            align-content: center;
           >span {
               display: flex;
               justify-content: center;
               align-items: center;
               flex-direction: column;
               img {
                   width: 22rem/@baseFontSize;
               }
               span {
                   font-size: 12rem/@baseFontSize;
                   display: block;
                   color: #838383;
                   &.isChosen {
                       color: #FCC93A;
                   }
               }
           }

        }
    }
</style>