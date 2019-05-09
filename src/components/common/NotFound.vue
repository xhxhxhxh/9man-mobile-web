<template>
    <div class="NotFound-container">
        <img src="./images/pic01.png" alt="">
        <p>{{text}}</p>
        <slot name="button"></slot>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        props: ['text'],
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .NotFound-container {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        img {
            height: 139rem/@baseFontSize;
            width: 155rem/@baseFontSize;
        }
        p {
            font-size: 20rem/@baseFontSize;
            color: rgba(153,153,153,1);
            text-align: center;
        }
    }
</style>