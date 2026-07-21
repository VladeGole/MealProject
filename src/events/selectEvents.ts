import {searchHandlers} from "../handlers/searchHandlers";


export function hookSelectEvents() {
    const searchButton = document.getElementById("searchMeals") as HTMLButtonElement;

    searchButton.addEventListener("click", searchHandlers);
}