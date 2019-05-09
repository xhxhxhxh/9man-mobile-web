<template>
    <div class="modifyName-container">
        <div class="goBack">
            <span @click="$router.go(-1)">取消</span>
            <span class="title">设置名字</span>
            <span class="save">完成</span>
        </div>
        <div class="list">
            <MyInput :type="'text'" :value="'小魔女'"></MyInput>
        </div>
    </div>
</template>

<script>
    import MyInput from '../common/MyInput.vue';
    export default {
        name: "ModifyName",
        components: {
            MyInput
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .modifyName-container {
        height: 100%;
        width: 100%;
        padding: 25rem/@baseFontSize 0;
        .goBack {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            padding: 0 25rem/@baseFontSize;
            display: flex;
            justify-content: space-between;
            box-shadow: 0 3rem/@baseFontSize 6rem/@baseFontSize -3rem/@baseFontSize rgba(136, 153, 191, 0.1);
            font-size: 14rem/@baseFontSize;
            position: relative;
            z-index: 999;
            .title {
                font-size: 18rem/@baseFontSize;
                color: #333;
                height: 60rem/@baseFontSize;
                position: absolute;
                top: 27rem/@baseFontSize;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .save {
                color: #FCC93A;
            }
        }
        .list {
            padding: 20rem/@baseFontSize 0;
        }
    }
</style>