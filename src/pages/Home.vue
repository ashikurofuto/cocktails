<script setup>
import { ref } from 'vue';
import AppLayout from '../components/AppLayout.vue';
import CocktailThumb from '@/components/CocktailThumb.vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';


const rootStore = useRootStore();
rootStore.getIngredients();

const { ingreients, ingredient, cocktails} = storeToRefs(rootStore);


function getCocktails() {
    rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredien(){
    rootStore.setIngredient(null);
}
</script>

<template>
<AppLayout imgUrl="/src/assets/images/dawa-cocktail.png" :back-func="removeIngredien" :is-back-button-visible="!!ingredient">
<div class="wrapper">
    <div v-if="!ingreient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
            <el-select v-model="rootStore.ingredient" class="select" filterable allow-create placeholder="Choose main ingredient" size="large" @change ="getCocktails">
                <el-option 
                v-for="item in ingreients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
                />
            </el-select>
        </div>
        <div class="text">
            Try our delicious cocktail recipes for every occasion. Find delicious 
            cocktail recipes by ingredient throught our cocktail generetor.
        </div>
        <img src="/src/assets/images/smallHomeCocktails.png" alt="small cocktails" class="img"/>
    </div>
    <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ingredient}}</div>
        <div class="line"></div>
        <div class="cocktails">
            <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
        </div>
    </div>
</div>   
</AppLayout>
</template>

<style lang="scss">
@import '../assets/styles/main.scss';


.select-wrapper {
    padding-top: 50px; 
}
.select {
    width: 220px;
}
.text {
    padding-top: 50px;
    line-height: 36px;
    letter-spacing: 0.1em;
    max-width: 516px;
    color: $textMuted;
    margin: 0 auto;
}
.img {
    margin-top: 60px;
}
.cocktails {
    display: flex;
    flex-wrap: wrap;
    max-height: 400px;
    overflow-y: auto;
    align-items: center;
    margin-top: 60px;
}
</style>