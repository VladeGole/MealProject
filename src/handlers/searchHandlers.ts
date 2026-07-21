import {getIngredients, printMeals} from "../service/mealDbService";
import {showMeals} from "../helpers/htmlSelectHelpers";

export async function searchHandlers() {

    const categorySelect = document.getElementById('categorySelect') as HTMLSelectElement;
    const ingredientSelect = document.getElementById('ingredientSelect') as HTMLSelectElement;
    const areaSelect = document.getElementById('areaSelect') as HTMLSelectElement;
    const mealHolder = document.getElementById("mealHolder") as HTMLDivElement;

    const ingredientMultiple = Array.from(ingredientSelect.selectedOptions).map(option => option.value);
    console.log(categorySelect.value, ingredientMultiple, areaSelect.value);
    mealHolder.innerHTML = "";

    const area = await printMeals({param: "a", value: areaSelect.value});
    const category = await printMeals({param: "c", value: categorySelect.value});
    const ingredients = await getIngredients(ingredientMultiple);

    if (area && area.length > 0) {
        showMeals("mealHolder", area);
    } else if (category && category.length > 0) {
        showMeals("mealHolder", category);
    } else if (ingredients && ingredients.length > 0) {
        showMeals("mealHolder", ingredients)
    } else {
        mealHolder.textContent = "No means found";
    }
}