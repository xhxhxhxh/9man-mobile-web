<template>
    <div class="avatar-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">个人头像</span>
            <span class="more" @click="sheetVisible = !sheetVisible">
                <span class="spot"></span>
                <span class="spot"></span>
                <span class="spot"></span>
            </span>
        </div>
        <div class="avatar">
            <img :src="avatarUrl" alt="">
        </div>
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>
        <input class="camera" type="file" name="cover" accept="image/*" @change="getPhoto"
               ref="camera"  style="display: none"/>
    </div>
</template>

<script>
    import avatarImg from './images/avatar.png';

    export default {
        name: "avatar",
        data () {
            return {
                sheetVisible: false,
                actions: [{name: '选择照片', method: this.openCamera},{name: '保存图片', method: '1'}],
                avatarUrl: avatarImg
            }
        },
        methods: {

            //调用相机
            openCamera () {
                this.$refs.camera.click();
            },

            //获取照片
            getPhoto (e) {
                const files = e.target.files;
                // console.log(files);
                const reader = new FileReader();
                const file = files[0];
                // console.dir(this.files[0]);
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.avatarUrl = reader.result;
                };
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .avatar-container {
        height: 100%;
        width: 100%;
        .goBack {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            padding: 0 25rem/@baseFontSize;
            position: relative;
            text-align: center;
            box-shadow: 0 3rem/@baseFontSize 6rem/@baseFontSize -3rem/@baseFontSize rgba(136, 153, 191, 0.1);
            .title {
                font-size: 18rem/@baseFontSize;
                color: #333;
            }
            .more {
                line-height: 60rem/@baseFontSize;
                height: 60rem/@baseFontSize;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                width: 30rem/@baseFontSize;
                position: absolute;
                top: 0;
                right: 25rem/@baseFontSize;
                .spot {
                    display: inline-block;
                    width: 5rem/@baseFontSize;
                    height: 5rem/@baseFontSize;
                    border-radius: 50%;
                    background-color: #000;
                }
            }
        }
        .avatar {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            img {
                width: 100%;
            }
        }
    }
</style>
