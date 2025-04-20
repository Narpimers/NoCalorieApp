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
        gram: parseFloat(cells[1]?.textContent) || 0,
        sugar: parseFloat(cells[2]?.textContent) || 0,
        protein: parseFloat(cells[3]?.textContent) || 0,
        fats: parseFloat(cells[4]?.textContent) || 0,
        carbohydrates: parseFloat(cells[5]?.textContent) || 0,
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


