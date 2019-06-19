<template>
    <div class="notLogin-container">
        <NotFound :text="'登录后查看课程~'" class="notFound">
            <template v-slot:button>
                <button @click="$router.push('/login')">立即登录</button>
            </template>
        </NotFound>
    </div>
</template>

<script>
    import NotFound from '../common/NotFound.vue';
    export default {
        name: "NotLogin",
        data () {
            return {

            }
        },
        components: {
            NotFound
        },
        created() {

        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .notLogin-container {
        .notFound {
            height: 230rem/@baseFontSize;
            button {
                height: 34rem/@baseFontSize;
                width: 120rem/@baseFontSize;
                line-height: 34rem/@baseFontSize;
                border-radius: 5rem/@baseFontSize;
                font-size: 12rem/@baseFontSize;
                color: #fff;
                background-color: #FCC93A;
                border: 0;
            }
        }
    }

</style>
