import LOGO from "./logo.svg";
import "./App.css";

export function Render() {
    const container = document.createElement("div");
    container.className = "App-header";

    const logo = document.createElement("img");
    logo.src = LOGO;
    logo.className = "App-logo";
    logo.alt = "logo";

    const code = document.createElement("code");
    code.textContent = "src/App.js";
    code.className = "code";

    const anchor = document.createElement("a");
    anchor.src = "https://reactjs.org/";
    anchor.textContent = "Learn REACT";
    anchor.className = "App-link";

    const text = document.createElement("p");
    text.textContent = `Edit ${code.textContent} and save to reload.`;

    const anchorBlock = document.createElement("div");

    const dateBlock = document.createElement("div");
    dateBlock.style.marginTop = "20px";
    const currentDate = new Date();

    dateBlock.append(currentDate);

    anchorBlock.append(anchor);
    container.append(logo, text, anchorBlock, dateBlock);
    document.body.append(container);

    return container;
}
