<template>
    <div class="propaganda-container">
        <div class="goBack">
            <span class="arrow-left" @click="$router.go(-1)"></span>
            <span class="title">少儿思维</span>
        </div>
        <div class="banner">
            <div class="img"></div>
        </div>
        <h3>六级教学体系</h3>
        <div class="level-list" @click="selectLevel">
            <span title="LV1" :style="{backgroundImage: selectedTitle === 'LV1' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV1'}">LV1</span>
            <span title="LV2" :style="{backgroundImage: selectedTitle === 'LV2' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV2'}">LV2</span>
            <span title="LV3" :style="{backgroundImage: selectedTitle === 'LV3' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV3'}">LV3</span>
            <span title="LV4" :style="{backgroundImage: selectedTitle === 'LV4' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV4'}">LV4</span>
            <span title="LV5" :style="{backgroundImage: selectedTitle === 'LV5' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV5'}">LV5</span>
            <span title="LV6" :style="{backgroundImage: selectedTitle === 'LV6' ? selectedLevel: ''}" :class="{selected: selectedTitle === 'LV6'}">LV6</span>
        </div>
        <div class="levelBox">
            <img :src="'/assets/images/' + selectedSrc + 'Item.png'" alt="">
        </div>
        <div class="content">
            <img src="./images/content.png" alt="">
        </div>
    </div>
</template>

<script>
    import LV1 from './images/LV1.png';
    import LV2 from './images/LV2.png';
    import LV3 from './images/LV3.png';
    import LV4 from './images/LV4.png';
    import LV5 from './images/LV5.png';
    import LV6 from './images/LV6.png';

    export default {
        name: "Propaganda",
        data () {
            return {
                selectedLevel: `url(${LV1})`,
                selectedTitle: 'LV1',
                selectedSrc: 'LV1'
            }
        },
        methods: {
            selectLevel (e) {
                const title = e.target.title;
                if (title === 'LV1') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV1})`;
                }
                if (title === 'LV2') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV2})`;
                }
                if (title === 'LV3') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV3})`;
                }
                if (title === 'LV4') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV4})`;
                }
                if (title === 'LV5') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV5})`;
                }
                if (title === 'LV6') {
                    this.selectedTitle = title;
                    this.selectedSrc = title;
                    return this.selectedLevel = `url(${LV6})`;
                }

            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/var.less";
    .propaganda-container {
        height: 100%;
        width: 100%;
        position: relative;
        .goBack {
            height: 60rem/@baseFontSize;
            line-height: 60rem/@baseFontSize;
            box-shadow: 0 3rem/@baseFontSize 6rem/@baseFontSize -3rem/@baseFontSize rgba(136, 153, 191, 0.1);
            position: relative;
            z-index: 999;
            background-color: #fff;
            .title {
                font-size: 18rem/@baseFontSize;
                color: #333;
                display: block;
                text-align: center;
            }
        }
        .banner {
            height: 175rem/@baseFontSize;
            padding: 21rem/@baseFontSize 21rem/@baseFontSize 0 21rem/@baseFontSize;
            .img {
                height: 100%;
                border-radius: 10rem/@baseFontSize;
                background: url("./images/首图@2x.png") no-repeat center;
                background-size: contain;
            }
        }
        h3 {
            height: 24rem/@baseFontSize;
            line-height: 24rem/@baseFontSize;
            font-size: 18rem/@baseFontSize;
            color: #333;
            margin-top: 30rem/@baseFontSize;
            padding-left: 17rem/@baseFontSize;
            font-weight: normal;
        }
        .level-list {
            padding: 0 21rem/@baseFontSize;
            display: flex;
            justify-content: space-between;
            span {
                width: 64rem/@baseFontSize;
                height: 69rem/@baseFontSize;
                text-align: center;
                line-height: 69rem/@baseFontSize;
                font-size: 12rem/@baseFontSize;
                background-position: center 4rem/@baseFontSize;
                background-size: cover;
                &.selected {
                    color: #fff !important;
                }
                &:nth-child(1) {
                    color: #ffc32c;
                }
                &:nth-child(2) {
                    color: #FFAA2B;
                }
                &:nth-child(3) {
                    color: #FF912A;
                }
                &:nth-child(4) {
                    color: #FF7729;
                }
                &:nth-child(5) {
                    color: #FF5E28;
                }
                &:nth-child(6) {
                    color: #FF4527;
                }
            }
        }
        .levelBox {
            padding: 0 7rem/@baseFontSize;
            height: 243rem/@baseFontSize;
            margin-top: -11rem/@baseFontSize;
            img {
                width: 100%;
                height: 100%;

            }
        }
        .content {
            padding: 0 7rem/@baseFontSize;
            margin-top: 31rem/@baseFontSize;
            img {
                width: 100%;
            }
        }
    }
</style>
