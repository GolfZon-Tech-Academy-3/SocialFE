<template>
    <div>
        <div class="wrapper">
            <div class="grid">
                <div class="normal">
                    
                </div>
                <div class="normal">

                </div>
                <div class="normal">

                </div>
                <div class="normal">

                </div>
                <div class="normal">

                </div>
                <div class="normal">

                </div>
                <div class="normal">

                </div>
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
    width: 1000px;
    height: 1122px;
    margin: 3em auto;
}
.grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
}
.normal {
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
}
</style>