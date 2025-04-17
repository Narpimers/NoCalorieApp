import { fetchData } from "../api/fetcher.js";
import { storeData } from "../containers/addRowFunction.js";
import { createElement } from "../containers/createElementFunction.js";
import { trGenerator } from "../containers/createElementFunction.js";

export const initMainPage = () => {
    const app = document.getElementById("app");
    const logo = document.createElement('h1');
    logo.innerHTML = "No CalorieApp";

    //Search inputs
    const foodInput = document.createElement('input');
    const gramInput = document.createElement('input');
    foodInput.placeholder = "product...";
    gramInput.placeholder = "gram...";
    gramInput.type = "number";

    // button
    const button = document.createElement("button");
    button.innerHTML = "add";

    //Table part
    const table = document.createElement("table");
    table.className = "table";
    table.innerHTML = 
    `<thead>
    <tr>
        <th class="tBody">Name</th>
        <th class="tBody">Gram</th>
        <th class="tBody">Sugar</th>
        <th class="tBody">Protein</th>
        <th class="tBody">Fats</th>
        <th class="tBody">Carbs</th>
    </tr>
  </thead>
<tbody>
</tbody>`;


// button eventListener 
button.addEventListener("click", async () => {

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
        gramInput.value = "";
        foodInput.value = "";


    } catch (error) {
        app.innerHTML = '';
        app.innerHTML =  `
        <h2> Error with data</h2>
        `;
    }

});

    // AppendChild
    app.appendChild(logo);
    app.appendChild(foodInput);
    app.appendChild(gramInput);
    app.appendChild(button);
    app.appendChild(table);

}