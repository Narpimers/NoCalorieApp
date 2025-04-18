import { initMainPage } from "./mainPage.js";

export const initErrorPage = () => {
    const app = document.getElementById("app");
    app.innerHTML = '';
    app.innerHTML =  `<h2>An <span class = "errorText">error</span> occurred while processing your request. Please try again later. If the issue persists, contact support</h2>`;

    const buttonGoMain = document.createElement("button");
    buttonGoMain.className = "buttonGoMain";
    buttonGoMain.innerHTML = "Go back";

    app.appendChild(buttonGoMain);

    buttonGoMain.addEventListener("click", () => {
        app.innerHTML = "";
        initMainPage();
    });
};