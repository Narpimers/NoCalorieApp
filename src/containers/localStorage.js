import { trGenerator } from "./createElementFunction.js";
import { addRemoveButton } from "./createElementFunction.js";

export function saveAllFromTable() {
    const STORAGE_KEY = "calorieAppData";
    const rows = document.querySelectorAll(".newProduct tr");

    if (!rows.length) return;

    const data = Array.from(rows).map((row) => {
        const cells = row.querySelectorAll("td");
        return {
        name: cells[0]?.textContent || "",
        gram: cells[1]?.textContent || 0,
        sugar: cells[2]?.textContent || 0,
        protein: cells[3]?.textContent || 0,
        fats: cells[4]?.textContent || 0,
        carbohydrates: cells[5]?.textContent || 0,
        };
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const getLocalData = () => {
    const localData = localStorage.getItem("calorieAppData");
    const parsedData = JSON.parse(localData);
    if (!localData) {
        return
    }

    parsedData.forEach(data => {
        const {name, gram, sugar, protein, fats, carbohydrates} = data;
        trGenerator(
            name,
            gram,
            sugar,
            protein,
            fats,
            carbohydrates,)
    });
    
  };


export const removeItemByName = (itemName) => {
    const localData = localStorage.getItem("calorieAppData"); 
    if (!localData) return;

    const parsedData = JSON.parse(localData);
    console.log(parsedData);
    
}