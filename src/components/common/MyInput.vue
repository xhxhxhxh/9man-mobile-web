<template>
    <div class="myInput-container">
        <input :type="type" v-model="value" v-focus="isFocus = true" v-blur="isFocus = false" autofocus>
        <i class="clearValue" @click="clearValue" v-if="value && isFocus">x</i>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: ['value', 'type'],
        data () {
            return {
                isFocus: false
            }
        },
        methods: {
            clearValue () {
                this.value = ''
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .myInput-container {
        height: 40rem/@baseFontSize;
        width: 100%;
        position: relative;
        input {
            height: 40rem/@baseFontSize;
            width: 100%;
            border: 1rem/@baseFontSize solid #ccc;
            padding: 0 25rem/@baseFontSize;
            font-size: 14rem/@baseFontSize;
            color: #333;
        }
        i {
            height: 10rem/@baseFontSize;
            width: 10rem/@baseFontSize;
            border-radius: 50%;
            background-color: #999;
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>