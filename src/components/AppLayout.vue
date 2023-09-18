<template>
<div class="root">
    <div :style="`background-image: url(${imgUrl});`" class="img"> 
    </div>
    <div class="main">
        <div class="btns">
            <el-button v-if="isBackButtonVisible" class="back" @click="backFunc" type="primary" :icon="Back" circle ></el-button>
            <el-button class="btn" @click="goForCocktailRandom">Get random cocktail</el-button>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router';
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue';
import { ROUTES_PATHS } from '@/constants';
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    backFunc: {
        type: Function,
        required: true
    },
    isBackButtonVisible : {
        type: Boolean,
        default: true,
    }
});

const route = useRoute();
const router = useRouter();

const routeName = computed(()=> route.name);

function goForCocktailRandom(){
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM);
    if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
        router.go();
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.root {
    background-color: $background;
    display: flex;
    min-height: 100vh;
}
.img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}
.main {
    position: relative;
    width: 50%;
    padding: 32px 40px;
}

.btn {
    position: absolute;
    top: 32px;
    right: 40px;
    background-color: $accent;
    border-color: $accent;
    color: $text;
    font-size: 16px;
    font-family: 'Raleway', 'Arial', sans-serif;

    &:hover, &:active {
        background-color: darken($accent, 10%);
        border-color: darken($accent, 10%);
    }
}
.btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.back {
    background-color: transparent;
    border-color: white;

    &:hover{
        border-color: $accent;
    }
}
</style>