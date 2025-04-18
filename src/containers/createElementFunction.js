export const createElement = (element, parentName ) => {
    if (condition) {
        
    }
    parentName.appendChild(document.createElement(`${element}`));
}

export const trGenerator = (name, gram, sugar, protein, fats, carbohydrates) => {
    const tBody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tr.className = name;

    const data = [
        { className: "tName", value: name },
        { className: "tGram", value: gram },
        { className: "tSugar", value: sugar },
        { className: "tProtein", value: protein },
        { className: "tFats", value: fats },
        { className: "tCarbohydrates", value: carbohydrates }
    ];

    data.forEach(item => {
        const td = document.createElement("td");
        td.className = item.className;
        td.innerHTML = item.value;
        tr.appendChild(td);
    });

    tBody.appendChild(tr);
    return tr;

};