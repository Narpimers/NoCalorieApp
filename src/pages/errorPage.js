import { initMainPage } from "./mainPage.js";

export const initErrorPage = () => {
    const app = document.getElementById("app");
    app.innerHTML = '';
    app.innerHTML =  `<h3>An <span class = "errorText">error</span> occurred while processing your request. Please try again later. If the issue persists, contact support</h3>`;

    const buttonGoMain = document.createElement("button");
    buttonGoMain.className = "buttonGoMain";
    buttonGoMain.innerHTML = "Go back";

    app.appendChild(buttonGoMain);

    buttonGoMain.addEventListener("click", () => {
        app.innerHTML = "";
        initMainPage();
    });
};