import { trGenerator } from "./createElementFunction.js";


export const storeData = (data, currentG) => {
    const {items} = data;
    const {name, sugar_g, protein_g, fat_saturated_g, carbohydrates_total_g} = items[0];


    const currentGram = currentG;
    const currentSugar = ((sugar_g/100)*currentGram).toFixed(2);
    const currentProtein = ((protein_g/100)*currentGram).toFixed(2);
    const currentFat = ((fat_saturated_g/100)*currentGram).toFixed(2);
    const currentCarbs = ((carbohydrates_total_g/100)*currentGram).toFixed(2);
    
    trGenerator (name, currentGram, currentSugar, currentProtein, currentFat, currentCarbs);
};
