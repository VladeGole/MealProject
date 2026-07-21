import {MealInterface} from "../interface/MealInterface";
import axios from "axios";
import {SearchByTextOrLetterInterface} from "../interface/SearchByTextOrLetterInterface";
import {BuildApiInterface} from "../interface/BuildApiInterface";
import {SearchBySingleProductInterface} from "../interface/SearchBySingleInterface";
import {CategoryInterface} from "../interface/CategoryInterface";
import {MealCategory} from "../interface/MealCategory";
import {MealResponse} from "../interface/MealResponse";

const URL_API: string = 'https://www.themealdb.com/api/json/v1/1/';

export function buildApi(endpoint: string, data: BuildApiInterface | null): string {

    return data ? URL_API + endpoint + "?" + data.param + "=" + data.value : URL_API + endpoint;
}

async function callApi<T>(endpoint: string, data: SearchBySingleProductInterface | SearchByTextOrLetterInterface | CategoryInterface | null): Promise<MealResponse<T>> {
    const url = buildApi(endpoint, data);
    console.log(url);
    const response = await axios.get<MealResponse<T>>(url);
    return response.data
}

export async function getMealById(data: SearchBySingleProductInterface): Promise<MealInterface[]> {
    const response = await callApi<MealInterface>("lookup.php", data);
    return response.meals ?? [];
}

export async function getAllCategories(data: CategoryInterface): Promise<MealCategory[]> {
    const response = await callApi<MealCategory>("list.php", data);
    return response.meals ?? [];
}

export async function printRecipeRandom(): Promise<MealInterface[]> {
    const mealsRandom: MealInterface[] = [];
    for (let i = 0; i < 6; i++) {
        const response = await callApi<MealInterface>("random.php", null);
        const meal = response.meals?.[0];
        if (meal) {
            mealsRandom.push(meal);
        }
    }
    return mealsRandom;
}

export async function getIngredients(ingredients: string[]): Promise<MealInterface[]> {
    const mealsRandom = [];

    for (let ingredient of ingredients) {
        mealsRandom.push(callApi<MealInterface>("filter.php", {param: "c", value: ingredient}));
    }

    const mealsArray = await Promise.all(mealsRandom);
    return mealsArray.flatMap(response => response.meals ?? []);
}

export async function printMeals(data: CategoryInterface): Promise<MealInterface[]> {
    const response = await callApi<MealInterface>("filter.php", data);
    return response.meals ?? [];
}

export function getCategories() {
    return getAllCategories({param: "c", value: "test"});
}

export function getLayerIngredients() {
    return getAllCategories({param: "i", value: "test"});
}

export function getAreas() {
    return getAllCategories({param: "c", value: "test"});
}