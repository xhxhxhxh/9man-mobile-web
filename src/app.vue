<template>
    <div class="app-container" id="app">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: "app",
        data(){
            return {
                rootUrl: this.$store.state.rootUrl,
                transitionName: ''
            }
        },
        created() {

        },
        watch:{
            $route(to,from){
                const toArr = to.path.split('/');
                const fromArr = from.path.split('/');
                const toDepth = toArr.length;
                const fromDepth = fromArr.length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                if (fromArr[1] == 'login' || toArr[1] == 'login') {
                    this.transitionName = 'slide-none'
                }
                if (fromArr[fromArr.length - 2] == 'personalInfo' || toArr[toArr.length - 2] == 'personalInfo') {
                    if (fromArr[fromArr.length - 1] != 'avatar' && toArr[toArr.length - 1] != 'avatar') {
                        this.transitionName = toDepth < fromDepth ? 'slide-down' : 'slide-up';
                    }

                }
            }
        },
        methods: {

            //获取头像
            getAvatar () {
                this.$axios.get(this.rootUrl + '/getAvatar')
                    .then(results => {
                        let data = results.data;
                        if (data['err_code'] == 200) {
                            this.avatar = data.message[0].avatar;
                        } else{

                        }
                    })
                    .catch(err => {

                    })
            },

        }
    }
</script>

<style lang="less">
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: #fff;
    }
    .app-container {
        height: 100%;
        width: 100%;
        .slide-left-enter {
            opacity: 0;
            transform: translateX(100%);
        }
        .slide-left-leave-to {
            opacity: 0;
            transform: translateX(-100%);
            position: absolute!important;
        }
        .slide-left-enter-active,.slide-left-leave-active {
            transition: all .5s ease;
        }
        .slide-right-enter {
            opacity: 0;
            transform: translateX(-100%);
        }
        .slide-right-leave-to {
            opacity: 0;
            transform: translateX(100%);
            position: absolute!important;
        }
        .slide-right-enter-active,.slide-right-leave-active {
            transition: all .5s ease;
        }
        .slide-up-enter {
            opacity: 0;
            transform: translateY(100%);
        }
        .slide-up-leave-to {
            opacity: 0;
            position: absolute!important;
        }
        .slide-up-enter-active,.slide-up-leave-active {
            transition: all .4s ease;
        }
        .slide-down-enter {
            opacity: 0;
        }
        .slide-down-leave-to {
            opacity: 0;
            transform: translateY(100%);
            position: absolute!important;
        }
        .slide-down-enter-active,.slide-down-leave-active {
            transition: all .4s ease;
        }
    }

</style>