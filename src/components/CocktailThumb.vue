<template>
<div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
    <div :style="`background-image: url(${cocktail.srtDrinkThumb})`" class="pic"></div>
    </RouterLink>
    <div class="name">{{cocktail.strDrink}}</div>
</div>
</template>

<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.root{
    width: calc((100% - 76px)/3);
    margin-right: 38px;
    padding-bottom: 20px;
    &:nth-child(3n+3){
        margin-right: 0;
    }
}
.name {
    padding-top: 15px;
    letter-spacing: 0.1em;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.pic{
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
}

</style>