import { trGenerator } from "./createElementFunction.js";

export const storeData = (data, currentG) => {
  const { items } = data;
  const { name, sugar_g, protein_g, fat_saturated_g, carbohydrates_total_g } =
    items[0];

  const currentGram = currentG;
  const currentSugar = ((sugar_g / 100) * currentGram).toFixed(2);
  const currentProtein = ((protein_g / 100) * currentGram).toFixed(2);
  const currentFat = ((fat_saturated_g / 100) * currentGram).toFixed(2);
  const currentCarbs = ((carbohydrates_total_g / 100) * currentGram).toFixed(2);

  trGenerator(
    name,
    currentGram,
    currentSugar,
    currentProtein,
    currentFat,
    currentCarbs,
  );
};

export const totalAmount = () => {
  // from Node to array
  const turnToArray = (nodeList) =>
    Array.from(nodeList).map((node) => parseFloat(node.textContent) || 0);

  const gramsArray = turnToArray(document.querySelectorAll(".tGram"));
  const sugarArray = turnToArray(document.querySelectorAll(".tSugar"));
  const proteinArray = turnToArray(document.querySelectorAll(".tProtein"));
  const fatsArray = turnToArray(document.querySelectorAll(".tFats"));
  const carbsArray = turnToArray(document.querySelectorAll(".tCarbohydrates"));

  const getTotal = (arr) => arr.reduce((sum, val) => sum + val, 0);

  document.querySelector(".totalGram").textContent = getTotal(gramsArray);
  document.querySelector(".totalSugar").textContent =
    getTotal(sugarArray).toFixed(2);
  document.querySelector(".totalProt").textContent =
    getTotal(proteinArray).toFixed(2);
  document.querySelector(".totalFat").textContent =
    getTotal(fatsArray).toFixed(2);
  document.querySelector(".totalCarbs").textContent =
    getTotal(carbsArray).toFixed(2);
};
