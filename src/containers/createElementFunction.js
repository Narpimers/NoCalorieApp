import { totalAmount } from "./addRowFunction.js";

export const createElement = (element, parentName) => {
  parentName.appendChild(document.createElement(`${element}`));
};


export const addRemoveButton = (parentName) => {
  const removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.innerText = "-";

  removeButton.addEventListener("click", () => {
    const productRow = parentName;
    const productName = productRow.querySelector(".tName")?.textContent;
    const productGram = productRow.querySelector(".tGram")?.textContent;

    let data = JSON.parse(localStorage.getItem("calorieAppData")) || [];

    data = data.filter(item => !(item.name === productName && item.gram === productGram));

    localStorage.setItem("calorieAppData", JSON.stringify(data));

    parentName.remove();
    
    totalAmount(removeButton.parentElement.className);
  });

  parentName.appendChild(removeButton);
};

export const trGenerator = (
  name,
  gram,
  sugar,
  protein,
  fats,
  carbohydrates,) => {
  const tBody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  tr.className = name;

  const data = [
    { className: "tName", value: name },
    { className: "tGram", value: gram },
    { className: "tSugar", value: sugar },
    { className: "tProtein", value: protein },
    { className: "tFats", value: fats },
    { className: "tCarbohydrates", value: carbohydrates },
  ];

  data.forEach((item) => {
    const td = document.createElement("td");
    td.className = item.className;
    td.innerHTML = item.value;
    tr.appendChild(td);
  });
  addRemoveButton(tr);
  tBody.appendChild(tr);
  return tr;
};


export const addLoading = () => {
  const loadingBar = document.createElement('div');
  loadingBar.id = "loadingBar";

  const loadingSquareOne = document.createElement('div');
  loadingSquareOne.id = "squareOne";
  loadingSquareOne.className = "loadingSquare";
  const loadingSquareTwo = document.createElement('div');
  loadingSquareTwo.id = "squareTwo";
  loadingSquareTwo.className = "loadingSquare";
  const loadingSquareThree = document.createElement('div');
  loadingSquareThree.id = "squareThree";
  loadingSquareThree.className = "loadingSquare";

  loadingBar.appendChild(loadingSquareOne);
  loadingBar.appendChild(loadingSquareTwo);
  loadingBar.appendChild(loadingSquareThree);

  document.querySelector('#app').appendChild(loadingBar);
  
};