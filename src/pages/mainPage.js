import { fetchData } from "../api/fetcher.js";
import { storeData } from "../containers/addRowFunction.js";
import { totalAmount } from "../containers/addRowFunction.js";
import { saveAllFromTable, getLocalData} from "../containers/localStorage.js";
// import { initErrorPage } from "./errorPage.js";

export const initMainPage = () => {

  const app = document.getElementById("app");
  const logo = document.createElement("h1");
  logo.innerHTML = `<span id = "noText">No</span>CalorieApp`;

  //Search inputs
  const foodInput = document.createElement("input");
  const gramInput = document.createElement("input");

  foodInput.className = "searchFields";
  foodInput.placeholder = "product...";
  gramInput.placeholder = "gram...";
  gramInput.type = "number";
  // button
  const button = document.createElement("button");
  button.innerHTML = "add";

  //Table part
  const table = document.createElement("table");
  table.className = "table";
  table.innerHTML = `<thead>
    <tr>
        <th class="tBody">Name</th>
        <th class="tBody">Gram</th>
        <th class="tBody">Sugar</th>
        <th class="tBody">Protein</th>
        <th class="tBody">Fats</th>
        <th class="tBody">Carbs</th>
    </tr>
  </thead>

<tbody class ="newProduct">
</tbody>

<tbody class="totalTbody">
    <th class="total">Total</th>
    <th class="totalGram"></th>
    <th class="totalSugar"></th>
    <th class="totalProt"></th>
    <th class="totalFat"></th>
    <th class="totalCarbs"></th>
</tbody>
`;


// add EventListener on add button

  button.addEventListener("click", async () => {

    if (gramInput.value.includes("-")) {
      gramInput.value = gramInput.value.replace("-", ""); 
    }

    // 'Write a name' styling
    if (!foodInput.value || !gramInput.value) {
      foodInput.classList.add("input-error");
      gramInput.classList.add("input-error");

      setTimeout(() => {
        foodInput.classList.remove("input-error");
        gramInput.classList.remove("input-error");
      }, 500);

      return;
    }

    foodInput.classList.remove("input-error");

    // get data
    try {
      const response = await fetchData(foodInput.value);
      const data = await response.json();
      storeData(data, gramInput.value);
      saveAllFromTable(); 
      

      gramInput.value = "";
      foodInput.value = "";

      totalAmount();

    } catch (error) {
      // initErrorPage();
      gramInput.value = "";
      foodInput.value = "";

      foodInput.classList.add("input-error");
      gramInput.classList.add("input-error");
      foodInput.placeholder = "can't fiend"

      setTimeout(() => {
        foodInput.classList.remove("input-error");
        gramInput.classList.remove("input-error");
      }, 500);
    }
  });

  // AppendChild
  app.appendChild(logo);
  app.appendChild(foodInput);
  app.appendChild(gramInput);
  app.appendChild(button);
  app.appendChild(table);
  getLocalData();
  totalAmount();
};
