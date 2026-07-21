import {
    getAreas,
    getCategories,
    getLayerIngredients,
    printRecipeRandom
} from "./service/mealDbService";
import {hookSelectEvents} from "./events/selectEvents";
import {fillSelectElement, showMeals} from "./helpers/htmlSelectHelpers";


async function main() {
    hookSelectEvents()

    const mealCategories = await getCategories();
    const mealIngredient = await getLayerIngredients();
    const mealArea = await getAreas();

    fillSelectElement("categorySelect", mealCategories);
    fillSelectElement("ingredientSelect", mealIngredient);
    fillSelectElement("areaSelect", mealArea);

    const response = await printRecipeRandom();
    showMeals("mealHolder", response);
}

main();