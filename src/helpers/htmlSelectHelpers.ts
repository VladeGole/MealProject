import {MealInterface} from "../interface/MealInterface";

export function fillSelectElement(elementId: string, data: any) {
    const selectElement = document.getElementById(elementId) as HTMLSelectElement;
    data.forEach((item: any) => {
        const option = document.createElement("option") as HTMLOptionElement;
        const optionValueAndText = buildValueAndText(item);
        option.value = optionValueAndText.value;
        option.textContent = optionValueAndText.text;
        selectElement.append(option);
    })
}

// @ts-ignore
function buildValueAndText(option: any): { text: string, value: string } {
    if (typeof option.strCategory === "string") {
        return {text: option.strCategory, value: option.strCategory};
    } else if (typeof option.idIngredient === "string") {
        return {text: option.strIngredient, value: option.idIngredient};
    } else if (typeof option.strArea === "string") {
        return {text: option.strArea, value: option.strArea};
    }
}

export function showMeals(parent: string, data: MealInterface[]): void {
    const parentElement = document.getElementById(parent) as HTMLElement;

    parentElement.innerHTML = '';

    data.forEach(meal => {
        const mealHolder = document.createElement("div") as HTMLDivElement;
        mealHolder.classList.add("meal");

        // Meal Title
        const mealTitle = document.createElement("h2") as HTMLHeadingElement;
        mealTitle.innerText = meal.strMeal;

        // Meal Image
        const mealImage = document.createElement("img") as HTMLImageElement;
        mealImage.src = meal.strMealThumb;
        mealImage.alt = `${meal.strMeal} thumbnail`;

        // Category and Area
        const categoryArea = document.createElement("p");
        categoryArea.innerText = `Category: ${meal.strCategory} | Area: ${meal.strArea}`;

        // Tags (if available)
        const tags = document.createElement("p");
        if (meal.strTags) {
            tags.innerText = `Tags: ${meal.strTags}`;
        }

        // Instructions
        const instructions = document.createElement("p");
        instructions.innerText = meal.strInstructions;

        // Ingredients List
        const ingredientsList = document.createElement("ul");

        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}` as keyof MealInterface;
            const measureKey = `strMeasure${i}` as keyof MealInterface;

            const ingredient = meal[ingredientKey];
            const measure = meal[measureKey];

            if (ingredient && ingredient.trim()) {
                const listItem = document.createElement("li");
                listItem.innerText = `${ingredient} - ${measure}`;
                ingredientsList.appendChild(listItem);
            }
        }

        // YouTube Link (if available)
        const youtubeLink = document.createElement("a");
        if (meal.strYoutube) {
            youtubeLink.href = meal.strYoutube;
            youtubeLink.target = "_blank";
            youtubeLink.innerText = "Watch on YouTube";
        }

        mealHolder.append(
            mealTitle,
            mealImage,
            categoryArea,
            tags,
            instructions,
            ingredientsList,
            youtubeLink
        );

        mealHolder.addEventListener("click", () => openMealPopup(meal))

        parentElement.append(mealHolder);
    });
}

function openMealPopup(meal: any) {

    const overlayPopup = document.createElement("div") as HTMLDivElement;
    overlayPopup.classList.add("popup-overlay");

    const mealPopup = document.createElement("div") as HTMLDivElement;
    mealPopup.classList.add("popup");

    const closeBtn = document.createElement("button") as HTMLButtonElement;
    closeBtn.innerText = "✕";
    closeBtn.classList.add("popup-close");
    closeBtn.addEventListener("click", () => overlayPopup.remove());

    const title = document.createElement("h2") as HTMLHeadingElement;
    title.innerText = meal.strMeal;

    // Meal Image
    const mealImage = document.createElement("img") as HTMLImageElement;
    mealImage.src = meal.strMealThumb;
    mealImage.alt = `${meal.strMeal} thumbnail`;

    // Category and Area
    const categoryArea = document.createElement("p");
    categoryArea.innerText = `Category: ${meal.strCategory} | Area: ${meal.strArea}`;

    // Tags (if available)
    const tags = document.createElement("p");
    if (meal.strTags) {
        tags.innerText = `Tags: ${meal.strTags}`;
    }

    // Instructions
    const instructions = document.createElement("p");
    instructions.innerText = meal.strInstructions;

    // Ingredients List
    const ingredientsList = document.createElement("ul");

    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof MealInterface;
        const measureKey = `strMeasure${i}` as keyof MealInterface;

        const ingredient = meal[ingredientKey];
        const measure = meal[measureKey];

        if (ingredient && ingredient.trim()) {
            const listItem = document.createElement("li");
            listItem.innerText = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(listItem);
        }
    }

    // YouTube Link (if available)
    const youtubeLink = document.createElement("a");
    if (meal.strYoutube) {
        youtubeLink.href = meal.strYoutube;
        youtubeLink.target = "_blank";
        youtubeLink.innerText = "Watch on YouTube";
    }

    mealPopup.append(
        closeBtn,
        title,
        mealImage,
        categoryArea,
        tags,
        instructions,
        ingredientsList,
        youtubeLink);

    overlayPopup.append(mealPopup);

    overlayPopup.addEventListener("click", (e) => { if (e.target === overlayPopup) {
        overlayPopup.remove();
    }});

    document.body.append(overlayPopup);
}