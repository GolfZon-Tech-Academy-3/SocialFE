<template>
    <div>
        <div class="wrapper">
        </div>
        <div class="content" @click.stop>
            <div style="width: 90%;height:24px;padding: 3% 0 3% 3%;font-size: 0.8em;font-weight: bold;">
                알림
            </div>
            <div style="width: 100%;height: 20px;">
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 100;
    cursor:auto;
}
.content {
    position: absolute;
    width: 270px;
    min-height: 40px;
    max-height: 400px;
    background-color: white;
    z-index: 100;
    box-shadow: 0 0 5px 0 gray;
    border-radius: 0.2em;
    transform: translate(-250px, 5px);
}
</style>