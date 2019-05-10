<template>
    <div class="myInput-container">
        <input :type="type" v-model="cacheValue" @focus="isFocus = true" @blur="isFocus = false" ref="btn">
        <i class="fa fa-times-circle" @mousedown="clearValue" v-if="cacheValue && isFocus"></i>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: ['value', 'type'],
        data () {
            return {
                isFocus: false,
                cacheValue: this.value
            }
        },
        mounted () {
            // setTimeout( () => {
            //     this.$refs.btn.click()
            // }, 500)
        },
        methods: {
            clearValue (e) {
                e.preventDefault();
                this.cacheValue = '';
                this.$refs.btn.focus()
            },
            //自动获取焦点
            // triggerFocus () {
            //     this.$refs.btn.focus()
            // }
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
            padding: 0 25rem/@baseFontSize;
            font-size: 14rem/@baseFontSize;
            color: #333;
            border-top: 0.5rem/@baseFontSize solid #ccc;
            border-bottom: 0.5rem/@baseFontSize solid #ccc;
            border-radius: unset;
        }
        i {
            position: absolute;
            top: 50%;
            right: 25rem/@baseFontSize;
            transform: translate(0, -50%);
            font-size: 16rem/@baseFontSize;
            color: #ccc;

        }
    }
</style>