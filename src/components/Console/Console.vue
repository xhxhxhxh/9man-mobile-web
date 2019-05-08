<template>
    <div class="console-container">
        <router-view></router-view>
        <BottomNav></BottomNav>
    </div>
</template>

<script>
    import BottomNav from '../BottomNav/BottomNav.vue';

    export default {
        name: "Console",
        components: {
            BottomNav
        }
    }
</script>

<style lang="less" scoped>
    .console-container {
        height: 100%;
        width: 100%;
    }

</style>