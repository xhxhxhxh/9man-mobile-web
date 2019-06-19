<template>
    <div class="page404-container">
        <NotFound :text="'访问的页面不存在~'" class="notFound">
            <template v-slot:button>
                <button @click="$router.push('/')">返回首页</button>
            </template>
        </NotFound>
    </div>
</template>

<script>
    import NotFound from '../common/NotFound.vue';
    export default {
        name: "page404",
        components: {
            NotFound
        },
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .page404-container {
        height: 100%;
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
